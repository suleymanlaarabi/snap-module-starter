import start from "./app";
import { conversationToolboxContext, } from "./context/conversationToolboxContext";
import { snapActivityContext, } from "./context/snapActivityContext";
import { snapApplicationContext, } from "./context/snapApplicationContext";
import { snapEnhancerContext, } from "./context/snapEnhancerContext";
start({
    snapActivityContext: snapActivityContext,
    snapApplicationContext: snapApplicationContext,
    snapEnhancerContext: snapEnhancerContext,
    conversationToolboxContext: conversationToolboxContext,
});
module.onSnapMainActivityCreate = function (activity) {
    snapActivityContext.activity = activity;
    snapActivityContext.events.forEach(function (event) {
        event.start(activity);
    });
};
module.onSnapApplicationLoad = function (context) {
    snapApplicationContext.context = context;
    snapApplicationContext.events.forEach(function (event) {
        event.start(context);
    });
};
module.onSnapEnhanceLoad = function (context) {
    snapEnhancerContext.context = context;
    snapEnhancerContext.events.forEach(function (event) {
        event.start(context);
    });
};
im.create("conversationToolbox" /* EnumUI.CONVERSATION_TOOLBOX */, function (builder) {
    conversationToolboxContext.events.forEach(function (event) {
        event.start(builder);
    });
});
