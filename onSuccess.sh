#!/bin/bash
rollup -c

fichier_js="./dist/bundle.js"
name=$(jq -r ".snapModule.name" "./package.json")
displayName=$(jq -r ".snapModule.displayName" "./package.json")
description=$(jq -r ".snapModule.description" "./package.json")
version=$(jq -r ".snapModule.version" "./package.json")
author=$(jq -r ".snapModule.author" "./package.json")


headers="// ==SE_module==
// name: ai_responds
// displayName: AI Responds
// description: an ai for responding to messages
// version: 1.0
// author: Suleyman Laarabi
// ==/SE_module==

var networking = require(\"networking\");
var messaging = require(\"messaging\");
var config = require(\"config\");
var im = require(\"interface-manager\");
var ipc = require(\"ipc\");
var javaInterface = require(\"java-interfaces\");
"

if [ ! -e "$fichier_js" ]; then
  echo "Le fichier '$fichier_js' n'existe pas."
  exit 1
fi

tempfile=$(mktemp)
echo "$headers" > "$tempfile"
cat "$fichier_js" >> "$tempfile"
mv "$tempfile" "$fichier_js"