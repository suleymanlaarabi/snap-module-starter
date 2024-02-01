import getMyUserId from "./common/user/useUser";
export default function start(props) {
    props.snapActivityContext.events.push({
        start: function (activity) {
            shortToast("Snap Activiter launched: " + getMyUserId(activity));
        },
    });
    props.conversationToolboxContext.events.push({
        start: function (builder) {
            shortToast("Conversation toolbox opened");
            builder.button("Hello World !", function () {
                shortToast("Hello World !");
            });
        },
    });
}
