#!/usr/bin/env node

var fs = require('fs');
var child_process = require('child_process');

if (!fs.existsSync('node_modules')) {
  if(fs.existsSync('yarn.lock')){
    child_process.execSync('yarn install', { stdio: 'inherit' });
  } else if (fs.existsSync('pnpm-lock.yaml')){
    child_process.execSync('pnpm install', { stdio: 'inherit' });
  } else if (fs.existsSync('package-lock.json') || fs.existsSync('npm-shrinkwrap.json')){
    // 'npm ci' is faster than 'npm i'.
    child_process.execSync('npm ci', { stdio: 'inherit' });
  } else {
    child_process.execSync('npm i', { stdio: 'inherit' });
  }
}
