import { snapApplicationContext } from "../src/context/snapApplicationContext";
export default function start() {
    snapApplicationContext.events.push({
        start: function (context) {
            im.create("conversationToolbox" /* EnumUI.CONVERSATION_TOOLBOX */, function (builder, args) {
                shortToast("conversationToolbox : " + args["conversationId"]);
                if (!messaging.isPresent()) {
                    builder.text("Messaging isn't loaded!");
                    return;
                }
                var text1 = builder.text("Fetching conversation...");
                messaging.fetchConversationWithMessages(args["conversationId"], function (error, messageList) {
                    if (error != null) {
                        text1.setAttribute("label", "Failed to fetch conversation: " + error);
                        return;
                    }
                    messageList.forEach(function (message) {
                        logInfo("message : " + message.serialize());
                    });
                    text1.setAttribute("label", "This conversation has " + messageList.size() + " recent messages");
                });
                builder.button("Send Hello World", function () {
                    messaging.sendChatMessage(args["conversationId"], "Hello World!", function (error) {
                        if (error != null) {
                            longToast("Failed to send message: " + error);
                            return;
                        }
                        shortToast("Message sent!");
                    });
                });
            });
        },
    });
}
