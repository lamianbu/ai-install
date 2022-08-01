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
index.mjs
```
import { existsSync } from 'fs';
import { execSync } from 'child_process';

if (!existsSync('node_modules')) {
  execSync('npm i', { stdio: 'inherit' });
}
if (!existsSync('node_modules/npm-install')) {
  execSync('npm i ai-install -D', { stdio: 'inherit' });
}
```
package.json
```
{
  "name": "ai-install",
  "version": "0.0.1",
  "description": "Avoid executing 'npm install'.",
  "main": "index.mjs",
  "bin": {
    "ai-install": "index.mjs"
  },
  ...
}
```
