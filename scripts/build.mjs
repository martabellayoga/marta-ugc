import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = resolve(projectRoot, 'dist');

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

await cp(resolve(projectRoot, 'src/index.html'), resolve(outputDirectory, 'index.html'));
await cp(resolve(projectRoot, 'src/script.js'), resolve(outputDirectory, 'script.js'));
await cp(resolve(projectRoot, 'src/styles'), resolve(outputDirectory, 'styles'), {
  recursive: true,
});

await cp(resolve(projectRoot, 'assets'), resolve(outputDirectory, 'assets'), {
  recursive: true,
  force: true,
});

await writeFile(resolve(outputDirectory, '.nojekyll'), '');
