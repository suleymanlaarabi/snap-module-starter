import { AndroidActivity } from "../types/android/app/Activity";
import { AndroidContentContext } from "../types/android/content/Context";
import start from "./app";
import { snapActivityContext } from "./context/snapActivityContext";
import { snapApplicationContext } from "./context/snapApplicationContext";
import { snapEnhancerContext } from "./context/snapEnhancerContext";

/*
-----------------------------------------------------
----DO NOT MODIFY THIS FILE WRITE YOUR CODE IN APP---
-----------------------------------------------------
*/

start();

module.onSnapMainActivityCreate = (activity: AndroidActivity) => {
  snapActivityContext.activity = activity;
  snapActivityContext.events.forEach((event) => {
    event(activity);
  });
};

module.onSnapApplicationLoad = (context: AndroidContentContext) => {
  snapApplicationContext.context = context;
  snapApplicationContext.events.forEach((event) => {
    event(context);
  });
};

module.onSnapEnhanceLoad = (context: AndroidContentContext) => {
  snapEnhancerContext.context = context;
  snapEnhancerContext.events.forEach((event) => {
    event(context);
  });
};
