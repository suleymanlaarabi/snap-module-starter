import getMyUserId from "./common/user/useUser";
import { StartFunctionProps } from "./index";

export default function start(props: StartFunctionProps) {
  props.snapActivityContext.events.push({
    start: (activity) => {
      shortToast("Snap Activiter launched: " + getMyUserId(activity));
    },
  });
  props.conversationToolboxContext.events.push({
    start: (builder) => {
      shortToast("Conversation toolbox opened");
      builder.button("Hello World !", () => {
        shortToast("Hello World !");
      });
    },
  });
}
