const path = require("path");

const fullPath = path.join("hello", "content", "subfolder", "test.txt");

console.log(fullPath);

const baseName = path.basename(fullPath);

console.log(baseName);
