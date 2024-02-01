import { snapActivityContext } from "../src/context/snapActivityContext";
export default function start() {
    snapActivityContext.events.push({
        start: function () {
            im.create("friendFeedContextMenu" /* EnumUI.FRIEND_FEED_CONTEXT_MENU */, function (builder, args) {
                builder.text("conversationId: " + args["conversationId"]);
                builder.text("userId: " + args["userId"]);
                builder
                    .row(function (builder) {
                    builder.text("My Switch");
                    builder.switch(config.getBoolean("myBoolean", false), function (value) {
                        config.setBoolean("myBoolean", value, true);
                    });
                })
                    .arrangement("spaceBetween" /* EnumPosArrangment.SPACE_BETWEEN */)
                    .fillMaxWidth()
                    .padding(4);
            });
        },
    });
}
