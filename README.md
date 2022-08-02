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
## src
index.js
```js
var fs = require('fs');
var child_process = require('child_process');

if (!fs.existsSync('node_modules')) {
  child_process.execSync('npm i', { stdio: 'inherit' });
}
```
package.json
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
