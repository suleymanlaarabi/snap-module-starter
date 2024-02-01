import getMyUserId from "./common/user/useUser";
export default function start(_a) {
    var snapActivityContext = _a.snapActivityContext, conversationToolboxContext = _a.conversationToolboxContext, settingsContext = _a.settingsContext;
    snapActivityContext.events.push({
        start: function (activity) {
            shortToast("Snap Activiter launched: " + getMyUserId(activity));
        },
    });
    conversationToolboxContext.events.push({
        start: function (builder) {
            shortToast("Conversation toolbox opened");
            builder.button("Hello World !", function () {
                shortToast("Hello World !");
            });
        },
    });
    settingsContext.events.push({
        start: function (builder) {
            shortToast("Settings opened");
            builder.button("Hello World !", function () {
                shortToast("Hello World !");
            });
        },
    });
}
