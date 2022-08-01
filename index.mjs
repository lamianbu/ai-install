import { existsSync } from 'fs';
import { execSync } from 'child_process';

if (!existsSync('node_modules')) {
  execSync('npm i', { stdio: 'inherit' });
}
if (!existsSync('node_modules/npm-install')) {
  execSync('npm i ai-install -D', { stdio: 'inherit' });
}
