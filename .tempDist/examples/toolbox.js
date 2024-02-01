export default function start(_a) {
    var conversationToolboxContext = _a.conversationToolboxContext;
    conversationToolboxContext.events.push({
        start: function (builder, args) {
            builder.text("Conversation id: " + args["conversationId"]);
            builder.button("Dismiss Dialog", function () {
                args["alertDialog"].dismiss();
            });
        },
    });
}
