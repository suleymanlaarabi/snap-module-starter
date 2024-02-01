// ==SE_module==
// name: valorant
// displayName: Valorant
// description: SnapModuleDescription
// version: 1.0
// author: YOU
// ==/SE_module==

var networking = require("networking");
var messaging = require("messaging");
var config = require("config");
var im = require("interface-manager");
var ipc = require("ipc");
var javaInterface = require("java-interfaces");
var hooker = require("hooker");


(function () {
    'use strict';

    function getMyUserId(context) {
        const database = context.openOrCreateDatabase("arroyo.db", 0, null);
        const cursor = database.rawQuery("SELECT value FROM required_values WHERE key = 'USERID'", null);
        try {
            if (cursor.moveToFirst()) {
                return cursor.getString(0);
            }
        }
        finally {
            cursor.close();
            database.close();
        }
        return null;
    }

    const snapActivityContext = {
        activity: null,
        events: [],
    };

    const snapApplicationContext = {
        context: null,
        events: [],
    };

    const snapEnhancerContext = {
        context: null,
        events: [],
    };

    function start() {
        snapActivityContext.events.push((activity) => {
            shortToast("Snap Activiter launched: " + getMyUserId(activity));
        });
        snapApplicationContext.events.push(() => {
            shortToast("Snap app launched");
        });
        snapEnhancerContext.events.push(() => {
            shortToast("SnapEnhance launched");
        });
    }

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

})();
