import { EnumUI } from "../data.types/interface-manager";
import { AndroidActivity } from "../types/android/app/Activity";
import { AndroidContentContext } from "../types/android/content/Context";
import start from "./app";
import {
  conversationToolboxContext,
  IConversationToolboxContext,
} from "./context/conversationToolboxContext";

import {
  ISnapActivityContext,
  snapActivityContext,
} from "./context/snapActivityContext";
import {
  ISnapApplicationContext,
  snapApplicationContext,
} from "./context/snapApplicationContext";
import {
  ISnapEnhancerContext,
  snapEnhancerContext,
} from "./context/snapEnhancerContext";

/*
-----------------------------------------------------
----DO NOT MODIFY THIS FILE WRITE YOUR CODE IN APP---
-----------------------------------------------------
*/

export interface StartFunctionProps {
  snapActivityContext: ISnapActivityContext;
  snapApplicationContext: ISnapApplicationContext;
  snapEnhancerContext: ISnapEnhancerContext;
  conversationToolboxContext: IConversationToolboxContext;
}

start({
  snapActivityContext,
  snapApplicationContext,
  snapEnhancerContext,
  conversationToolboxContext,
});

module.onSnapMainActivityCreate = (activity: AndroidActivity) => {
  snapActivityContext.activity = activity;
  snapActivityContext.events.forEach((event) => {
    event.start(activity);
  });
};

module.onSnapApplicationLoad = (context: AndroidContentContext) => {
  snapApplicationContext.context = context;
  snapApplicationContext.events.forEach((event) => {
    event.start(context);
  });
};

module.onSnapEnhanceLoad = (context: AndroidContentContext) => {
  snapEnhancerContext.context = context;
  snapEnhancerContext.events.forEach((event) => {
    event.start(context);
  });
};

im.create(EnumUI.CONVERSATION_TOOLBOX, (builder) => {
  conversationToolboxContext.events.forEach((event) => {
    event.start(builder);
  });
});
