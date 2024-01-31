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

(function () {
    'use strict';

    var onSnapApplicationLoadCalls = {
        events: [],
    };

    var onSnapEnhancerLoadCalls = {
        events: [],
    };

    var onSnapActivityLoadCalls = {
        events: [],
    };

    function start() {
        onSnapActivityLoadCalls.events.push(function () {
            shortToast("Snap Activiter launched");
        });
        onSnapApplicationLoadCalls.events.push(function () {
            shortToast("Snap app launched");
        });
        onSnapEnhancerLoadCalls.events.push(function () {
            shortToast("SnapEnhance launched");
        });
    }

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

})();
