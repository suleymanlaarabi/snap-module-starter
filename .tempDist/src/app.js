import { onSnapApplicationLoadCalls } from "./loader/snapApplicationLoader";
import { onSnapEnhancerLoadCalls } from "./loader/snapEnhanceLoader";
import { onSnapActivityLoadCalls } from "./loader/snapMainActivityLoader";
export default function start() {
    onSnapActivityLoadCalls.events.push(function () {
        shortToast("Snap Activiter launched");
    });
    onSnapApplicationLoadCalls.events.push(function () {
        shortToast("Snap app launched");
    });
    onSnapEnhancerLoadCalls.events.push(function () {
        shortToast("SnapEnhance launched");
    });
}
