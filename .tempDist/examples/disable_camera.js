import { snapActivityContext } from "../src/context/snapActivityContext";
import { snapEnhancerContext } from "../src/context/snapEnhancerContext";
export default function start() {
    snapEnhancerContext.events.push({
        start: function (context) {
            im.create("settings" /* EnumUI.SETTINGS */, function (builder) {
                builder
                    .row(function (builder) {
                    builder.text("Disable camera");
                    builder.switch(config.getBoolean("disableCamera", false), function (value) {
                        config.setBoolean("disableCamera", value, true);
                    });
                })
                    .spacedBy(10)
                    .fillMaxWidth();
            });
        },
    });
    snapActivityContext.events.push({
        start: function (activity) {
            var getCameraDisabledMethod = hooker.findMethodWithParameters("android.app.admin.DevicePolicyManager", "getCameraDisabled", ["android.content.ComponentName"]);
            hooker.hook(getCameraDisabledMethod, "before" /* Stage.BEFORE */, function (param) {
                var shouldDisableCamera = config.getBoolean("disableCamera") == true;
                logInfo("getCameraDisabled called! shouldDisableCamera=" + shouldDisableCamera);
                if (shouldDisableCamera) {
                    param.result = true;
                }
            });
        },
    });
}
