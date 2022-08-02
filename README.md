# ai-install
Say goodbay to `npm install`, no need `npm install`, throw away `npm install`.
## example
In your project, add `npx -y ai-install` to package.json->scripts->start/build.
```json
{
  "name": "ai-install-demo",
  "scripts": {
    "start": "npx -y ai-install && xxx serve --open",
    "build": "npx -y ai-install && xxx build"
  },
  "devDependencies": {
    "xxx": "x.y.z"
  }
}
```
After `git clone`, just
```shell
npm start 
```
No need
```shell
npm install
```
## because
```shell
npx -y ai-install
```
executing `npm install` if not installed.

npx run an arbitrary command from an npm package (either one installed locally, or fetched remotely).
## yarn & pnpm
```shell
npx -y ai-install
```
In yarn project, auto executing `yarn install` if not installed.

In pnpm project, auto executing `pnpm install` if not installed.
## src
package.json defined a commond `ai-install`.
```json
{
  "name": "ai-install",
  "version": "1.0.0",
  "description": "Say goodbay to `npm install`, no need `npm install`, throw away `npm install`.",
  "main": "index.js",
  "bin": {
    "ai-install": "index.js"
  }
}
```
index.js executing `npm/yarm/pnpm install` if not installed.
```js
#!/usr/bin/env node

var fs = require('fs');
var child_process = require('child_process');

if (!fs.existsSync('node_modules')) {
  if(fs.existsSync('yarn.lock')){
    child_process.execSync('yarn install', { stdio: 'inherit' });
  } else if (fs.existsSync('pnpm-lock.yaml')){
    child_process.execSync('pnpm install', { stdio: 'inherit' });
  } else {
    child_process.execSync('npm install', { stdio: 'inherit' });
  }
}
```
