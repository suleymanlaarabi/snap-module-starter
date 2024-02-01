import getMyUserId from "./common/user/useUser";
import { StartFunctionProps } from "./index";

export default function start({
  snapActivityContext,
  conversationToolboxContext,
  settingsContext,
}: StartFunctionProps) {
  snapActivityContext.events.push({
    start: (activity) => {
      shortToast("Snap Activiter launched: " + getMyUserId(activity));
    },
  });
  conversationToolboxContext.events.push({
    start: (builder) => {
      shortToast("Conversation toolbox opened");
      builder.button("Hello World !", () => {
        shortToast("Hello World !");
      });
    },
  });
  settingsContext.events.push({
    start: (builder) => {
      shortToast("Settings opened");
      builder.button("Hello World !", () => {
        shortToast("Hello World !");
      });
    },
  });
}
