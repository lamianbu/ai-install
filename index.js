#!/usr/bin/env node

var fs = require('fs');
var child_process = require('child_process');

if (!fs.existsSync('node_modules')) {
  child_process.execSync('npm i', { stdio: 'inherit' });
}
if (!fs.existsSync('node_modules/npm-install')) {
  child_process.execSync('npm i ai-install -D', { stdio: 'inherit' });
}
