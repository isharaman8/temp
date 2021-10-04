const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "generic", "test");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "generic", "test");
console.log(absolute);
