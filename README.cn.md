# ai-install 命令
永别了 `npm install`, 让你的前端项目免执行 `npm install`.
## 例子
在你的前端项目中, 添加 `npx -y ai-install` 到  package.json->scripts->start/build.
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
那么 `git clone` 拉取代码之后, 仅直接执行
```shell
npm start
```
免去执行
```shell
npm install
```
## 原理
package.json->scripts 中的
```shell
npx -y ai-install
```
执行 `ai-install` 命令：如果项目未初始安装，那么自动执行 `npm install`.

npx 优先执行本地命令，如果本地不存在则去 npmjs.com 查找。

## yarn & pnpm
```shell
npx -y ai-install
```
如果 yarn 项目未初始安装，会自动执行 `yarn install`

如果 pnpm 项目未初始安装，会自动执行 `pnpm install`

## 源代码
package.json 定义了一个 'ai-install' 的命令。
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
index.js 如果项目未初始化安装，那么区分 npm/yarn/pnpm 环境，执行对应的 `npm install` 命令。
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
