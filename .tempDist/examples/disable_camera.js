import { snapActivityContext } from "../src/context/snapActivityContext";
import { snapEnhancerContext } from "../src/context/snapEnhancerContext";
export default function start() {
    snapEnhancerContext.events.push((context) => {
        im.create("settings" /* EnumUI.SETTINGS */, (builder) => {
            builder
                .row((builder) => {
                builder.text("Disable camera");
                builder.switch(config.getBoolean("disableCamera", false), (value) => {
                    config.setBoolean("disableCamera", value, true);
                });
            })
                .spacedBy(10)
                .fillMaxWidth();
        });
    });
    snapActivityContext.events.push((activity) => {
        var getCameraDisabledMethod = hooker.findMethodWithParameters("android.app.admin.DevicePolicyManager", "getCameraDisabled", ["android.content.ComponentName"]);
        hooker.hook(getCameraDisabledMethod, "before" /* Stage.BEFORE */, (param) => {
            var shouldDisableCamera = config.getBoolean("disableCamera") == true;
            logInfo("getCameraDisabled called! shouldDisableCamera=" + shouldDisableCamera);
            if (shouldDisableCamera) {
                param.result = true;
            }
        });
    });
}
