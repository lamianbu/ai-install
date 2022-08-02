# ai-install
No need 'npm install' if you add 'npx -y ai-install' to package.json script commands of your project.
# example
In your project, add 'npx -y ai-install' to package.json->scripts->start/build.
```json
{
  "name": "ai-install-demo",
  "scripts": {
    "start": "npx -y ai-install && vite --open",
    "build": "npx -y ai-install && vite build",
    ...
  },
  "devDependencies": {
    "vite": "3.0.0"
  }
}
```
After 'git clone', you can only 
```cmd
npm start 
```
No need
```cmd
npm install
```
# because
```cmd
npx -y ai-install
```
executing 'npm install' if not installed.
# src
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
  "description": "No need 'npm install' if you add 'npx -y ai-install' to package.json script commands of your project.",
  "main": "index.js",
  "bin": {
    "ai-install": "index.js"
  },
  ...
}
```
