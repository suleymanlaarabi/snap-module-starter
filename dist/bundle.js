// ==SE_module==
// name: ai_responds
// displayName: AI Responds
// description: an ai for responding to messages
// version: 1.0
// author: Suleyman Laarabi
// ==/SE_module==

var networking = require("networking");
var messaging = require("messaging");
var config = require("config");
var im = require("interface-manager");
var ipc = require("ipc");
var javaInterface = require("java-interfaces");

(function () {
    'use strict';

    module.onSnapMainActivityCreate = function (activity) {
        longToast("Hello World !");
    };

})();
