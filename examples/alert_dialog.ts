import getMyUserId from "../src/common/user/useUser";
import { onSnapActivityLoadCalls } from "../src/loader/snapMainActivityLoader";
import { AndroidActivity } from "../types/android/app/Activity";

export default function start() {
  onSnapActivityLoadCalls.events.push((activity: AndroidActivity) => {
    const myUserId = getMyUserId(activity);

    activity.runOnUiThread(
      javaInterfaces.runnable(() => {
        var myDialog = im.createAlertDialog(activity, (builder, dialog) => {
          builder.text("My User Id is : " + myUserId);
        });

        myDialog.show();
      })
    );
  });
}
