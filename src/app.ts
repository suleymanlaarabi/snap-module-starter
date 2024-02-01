import getMyUserId from "./common/user/useUser";
import { snapActivityContext } from "./context/snapActivityContext";
import { snapApplicationContext } from "./context/snapApplicationContext";
import { snapEnhancerContext } from "./context/snapEnhancerContext";

export default function start() {
  snapActivityContext.events.push((activity) => {
    shortToast("Snap Activiter launched: " + getMyUserId(activity));
  });

  snapApplicationContext.events.push(() => {
    shortToast("Snap app launched");
  });
  snapEnhancerContext.events.push(() => {
    shortToast("SnapEnhance launched");
  });
}
