import { snapActivityContext } from "../src/context/snapActivityContext";
export default function start() {
    snapActivityContext.events.push(() => {
        im.create("friendFeedContextMenu" /* EnumUI.FRIEND_FEED_CONTEXT_MENU */, (builder, args) => {
            builder.text("conversationId: " + args["conversationId"]);
            builder.text("userId: " + args["userId"]);
            builder
                .row((builder) => {
                builder.text("My Switch");
                builder.switch(config.getBoolean("myBoolean", false), (value) => {
                    config.setBoolean("myBoolean", value, true);
                });
            })
                .arrangement("spaceBetween" /* EnumPosArrangment.SPACE_BETWEEN */)
                .fillMaxWidth()
                .padding(4);
        });
    });
}
