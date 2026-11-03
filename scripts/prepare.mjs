import { access } from 'node:fs/promises';

for (const file of [
  'www/index.html',
  'www/styles.css',
  'www/app.js'
]) {
  await access(file);
}

console.log('VIKKU Code Academy files ready.');
