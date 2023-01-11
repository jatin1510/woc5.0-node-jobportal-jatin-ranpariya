const path = require('path');
const a = path.win32.basename('\\user\\apple\\get-pip.py');
const b = path.win32.dirname('\\user\\apple\\get-pip.py');
console.log(a);
console.log(b);
console.log(path.extname('\\user\\apple\\get-pip.py'));
console.log(path.extname(__filename));
console.log(__filename, path.extname(__filename));