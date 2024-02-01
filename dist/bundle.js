// ==SE_module==
// name: snap_module_name
// displayName: SnapModuleName
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
        var database = context.openOrCreateDatabase("arroyo.db", 0, null);
        var cursor = database.rawQuery("SELECT value FROM required_values WHERE key = 'USERID'", null);
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

    function start(_a) {
        var snapActivityContext = _a.snapActivityContext, conversationToolboxContext = _a.conversationToolboxContext, settingsContext = _a.settingsContext;
        snapActivityContext.events.push({
            start: function (activity) {
                shortToast("Snap Activiter launched: " + getMyUserId(activity));
            },
        });
        conversationToolboxContext.events.push({
            start: function (builder) {
                shortToast("Conversation toolbox opened");
                builder.button("Hello World !", function () {
                    shortToast("Hello World !");
                });
            },
        });
        settingsContext.events.push({
            start: function (builder) {
                shortToast("Settings opened");
                builder.button("Hello World !", function () {
                    shortToast("Hello World !");
                });
            },
        });
    }

    var conversationToolboxContext = {
        events: [],
    };

    var friendFeedContext = {
        events: [],
    };

    var settingsContext = {
        events: [],
    };

    var snapActivityContext = {
        activity: null,
        events: [],
    };

    var snapApplicationContext = {
        context: null,
        events: [],
    };

    var snapEnhancerContext = {
        context: null,
        events: [],
    };

    start({
        snapActivityContext: snapActivityContext,
        snapApplicationContext: snapApplicationContext,
        snapEnhancerContext: snapEnhancerContext,
        conversationToolboxContext: conversationToolboxContext,
        friendFeedContext: friendFeedContext,
        settingsContext: settingsContext,
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
    im.create("friendFeedContextMenu" /* EnumUI.FRIEND_FEED_CONTEXT_MENU */, function (builder) {
        friendFeedContext.events.forEach(function (event) {
            event.start(builder);
        });
    });
    im.create("settings" /* EnumUI.SETTINGS */, function (builder) {
        settingsContext.events.forEach(function (event) {
            event.start(builder);
        });
    });

})();
