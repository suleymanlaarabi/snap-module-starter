import getMyUserId from "../src/common/user/useUser";
import { snapActivityContext } from "../src/context/snapActivityContext";
export default function start() {
    snapActivityContext.events.push({
        start: function (activity) {
            var myUserId = getMyUserId(activity);
            activity.runOnUiThread(javaInterfaces.runnable(function () {
                var myDialog = im.createAlertDialog(activity, function (builder, dialog) {
                    builder.text("My User Id is : " + myUserId);
                });
                myDialog.show();
            }));
        },
    });
}
