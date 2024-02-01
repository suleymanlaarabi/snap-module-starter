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
module.onSnapMainActivityCreate = (activity) => {
    snapActivityContext.activity = activity;
    snapActivityContext.events.forEach((event) => {
        event(activity);
    });
};
module.onSnapApplicationLoad = (context) => {
    snapApplicationContext.context = context;
    snapApplicationContext.events.forEach((event) => {
        event(context);
    });
};
module.onSnapEnhanceLoad = (context) => {
    snapEnhancerContext.context = context;
    snapEnhancerContext.events.forEach((event) => {
        event(context);
    });
};
