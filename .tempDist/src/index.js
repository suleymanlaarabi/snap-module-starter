import start from "./app";
import { conversationToolboxContext, } from "./context/conversationToolboxContext";
import { friendFeedContext, } from "./context/friendFeedContext";
import { settingsContext, } from "./context/settingsModuleContext";
import { snapActivityContext, } from "./context/snapActivityContext";
import { snapApplicationContext, } from "./context/snapApplicationContext";
import { snapEnhancerContext, } from "./context/snapEnhancerContext";
import { unloadContext } from "./context/unloadContext";
start({
    snapActivityContext: snapActivityContext,
    snapApplicationContext: snapApplicationContext,
    snapEnhancerContext: snapEnhancerContext,
    unloadContext: unloadContext,
    conversationToolboxContext: conversationToolboxContext,
    friendFeedContext: friendFeedContext,
    settingsContext: settingsContext,
});
module.onSnapMainActivityCreate = function (activity) {
    snapActivityContext.activity = activity;
    snapActivityContext.events.forEach(function (event) {
        event.start(activity, null);
    });
};
module.onSnapApplicationLoad = function (context) {
    snapApplicationContext.context = context;
    snapApplicationContext.events.forEach(function (event) {
        event.start(context, null);
    });
};
module.onSnapEnhanceLoad = function (context) {
    snapEnhancerContext.context = context;
    snapEnhancerContext.events.forEach(function (event) {
        event.start(context, null);
    });
};
module.onUnload = function () {
    unloadContext.events.forEach(function (event) {
        event.start(null, null);
    });
};
im.create("conversationToolbox" /* EnumUI.CONVERSATION_TOOLBOX */, function (builder, args) {
    conversationToolboxContext.events.forEach(function (event) {
        event.start(builder, args);
    });
});
im.create("friendFeedContextMenu" /* EnumUI.FRIEND_FEED_CONTEXT_MENU */, function (builder, args) {
    friendFeedContext.events.forEach(function (event) {
        event.start(builder, args);
    });
});
im.create("settings" /* EnumUI.SETTINGS */, function (builder, args) {
    settingsContext.events.forEach(function (event) {
        event.start(builder, args);
    });
});
