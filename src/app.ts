import { onSnapApplicationLoadCalls } from "./loader/snapApplicationLoader";
import { onSnapEnhancerLoadCalls } from "./loader/snapEnhanceLoader";
import { onSnapActivityLoadCalls } from "./loader/snapMainActivityLoader";

export default function start() {
  onSnapActivityLoadCalls.events.push((activity) => {
    shortToast("Snap Activiter launched");
  });
  onSnapApplicationLoadCalls.events.push(() => {
    shortToast("Snap app launched");
  });
  onSnapEnhancerLoadCalls.events.push(() => {
    shortToast("SnapEnhance launched");
  });
}
