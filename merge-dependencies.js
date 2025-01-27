const fs = require('fs');
const path = require('path');

// Paths
const sdsPackagePath = path.resolve('node_modules/sds/package.json');
const projectPackagePath = path.resolve('package.json');

// Read the package.json files
const sdsPackage = JSON.parse(fs.readFileSync(sdsPackagePath, 'utf-8'));
const projectPackage = JSON.parse(fs.readFileSync(projectPackagePath, 'utf-8'));

// Merge dependencies and devDependencies from SDS into your project
const mergedDependencies = { ...sdsPackage.dependencies, ...sdsPackage.devDependencies };

// Add dependencies to the project's package.json
projectPackage.dependencies = projectPackage.dependencies || {};
for (const [dep, version] of Object.entries(mergedDependencies)) {
  projectPackage.dependencies[dep] = version;
}

// Write the updated project package.json
fs.writeFileSync(projectPackagePath, JSON.stringify(projectPackage, null, 2), 'utf-8');
console.log('Dependencies merged! Run "npm install" to apply changes.');