import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const srcDir = path.join(rootDir, 'src');

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

// 1. Gather all code contents from src/, index.html, package.json, vite.config.js
const codeFiles = getAllFiles(srcDir);
let combinedCode = '';

codeFiles.forEach(file => {
  combinedCode += fs.readFileSync(file, 'utf8') + '\n';
});

if (fs.existsSync(path.join(rootDir, 'index.html'))) {
  combinedCode += fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8') + '\n';
}

if (fs.existsSync(path.join(rootDir, 'vite.config.js'))) {
  combinedCode += fs.readFileSync(path.join(rootDir, 'vite.config.js'), 'utf8') + '\n';
}

// 2. Scan public directory for files not referenced in codebase
const publicFiles = getAllFiles(publicDir);
const unusedFiles = [];
const activeFiles = [];
let totalBytesSaved = 0;

publicFiles.forEach(filePath => {
  const fileName = path.basename(filePath);
  // Keep essential browser/manifest files
  if (fileName === 'favicon.ico' || fileName === 'manifest.json' || fileName === 'robots.txt' || fileName === '.DS_Store') {
    return;
  }

  // Search for the filename string in combined codebase
  if (!combinedCode.includes(fileName)) {
    const stat = fs.statSync(filePath);
    unusedFiles.push({ path: filePath, name: fileName, size: stat.size });
    totalBytesSaved += stat.size;
  } else {
    activeFiles.push(fileName);
  }
});

console.log(`\n==================================================`);
console.log(`🔍 UNUSED ASSET AUDIT REPORT`);
console.log(`==================================================`);
console.log(`Active Assets In Use (${activeFiles.length}):`, activeFiles);
console.log(`\nOrphaned/Unused Assets Found (${unusedFiles.length}):`);

unusedFiles.forEach((file, idx) => {
  const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
  console.log(`  [${idx + 1}] ${file.name} (${sizeMB} MB)`);
});

const totalMB = (totalBytesSaved / (1024 * 1024)).toFixed(2);
console.log(`\nTotal Storage Space to Reclaim: ${totalMB} MB`);
console.log(`==================================================\n`);

// 3. Delete unused asset files
unusedFiles.forEach(file => {
  console.log(`🗑️ Deleting unused asset: ${file.name}`);
  fs.unlinkSync(file.path);
});

console.log(`\n🎉 ASSET PURGE COMPLETE! Successfully freed ${totalMB} MB of storage.`);
