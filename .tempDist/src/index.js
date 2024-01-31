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
module.onSnapMainActivityCreate = function (activity) {
    onSnapActivityLoadCalls.events.forEach(function (event) {
        event();
    });
};
module.onSnapApplicationLoad = function (context) {
    onSnapApplicationLoadCalls.events.forEach(function (event) {
        event();
    });
};
module.onSnapEnhanceLoad = function (context) {
    onSnapEnhancerLoadCalls.events.forEach(function (event) {
        event();
    });
};
