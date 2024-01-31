import start from "./app";
import { onSnapApplicationLoadCalls } from "./loader/snapApplicationLoader";
import { onSnapEnhancerLoadCalls } from "./loader/snapEnhanceLoader";
import { onSnapActivityLoadCalls } from "./loader/snapMainActivityLoader";

/*
-----------------------------------------------------
----DO NOT MODIFY THIS FILE WRITE YOUR CODE IN APP---
-----------------------------------------------------
*/

start();

module.onSnapMainActivityCreate = (activity: AndroidActivity) => {
  onSnapActivityLoadCalls.events.forEach((event) => {
    event();
  });
};

module.onSnapApplicationLoad = (context) => {
  onSnapApplicationLoadCalls.events.forEach((event) => {
    event();
  });
};

module.onSnapEnhanceLoad = (context: any) => {
  onSnapEnhancerLoadCalls.events.forEach((event) => {
    event();
  });
};
