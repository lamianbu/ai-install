# ai-install
Avoid executing 'npm install'
# example
In some project, package.json
```
{
  "name": "ai-install-demo",
  "scripts": {
    "start": "npx ai-install && vite",
    ...
  },
  "devDependencies": {
    "vite": "3.0.0"
  }
}
```
You can only 
```
npm start
```
Avoid executing the command
```
npm install
```
# because
```
npx ai-install
```
executing 'npm install' if not installed.
# src
index.js
```
var fs = require('fs');
var child_process = require('child_process');

if (!fs.existsSync('node_modules')) {
  child_process.execSync('npm i', { stdio: 'inherit' });
}
if (!fs.existsSync('node_modules/npm-install')) {
  child_process.execSync('npm i ai-install -D', { stdio: 'inherit' });
}
```
package.json
```
{
  "name": "ai-install",
  "version": "0.0.4",
  "description": "Avoid executing 'npm install'.",
  "main": "index.js",
  "bin": {
    "ai-install": "index.js"
  },
  ...
}
```
