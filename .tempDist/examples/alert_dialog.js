import getMyUserId from "../src/common/user/useUser";
import { snapActivityContext } from "../src/context/snapActivityContext";
export default function start() {
    snapActivityContext.events.push((activity) => {
        const myUserId = getMyUserId(activity);
        activity.runOnUiThread(javaInterfaces.runnable(() => {
            var myDialog = im.createAlertDialog(activity, (builder, dialog) => {
                builder.text("My User Id is : " + myUserId);
            });
            myDialog.show();
        }));
    });
}
