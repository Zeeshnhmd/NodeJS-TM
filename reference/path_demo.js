const path = require('path');

// Base file name (This will give us "path_demo.js")
console.log(path.basename(__filename));

// Directory name (This will give us "D:\personal_space\learning\Backend\nodejs-tm\reference")
console.log(path.dirname(__filename));

// File extension (This will give us ".js")
console.log(path.extname(__filename));

/**
 // * Create path object (This will give us an object which will contain {root, dir, base, ext, name})

 {
  root: 'D:\\',
  dir: 'D:\\personal_space\\learning\\Backend\\nodejs-tm\\reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}

//* example:- path.parse(__filename).root
 */

console.log(path.parse(__filename));

// Concatenate paths (This will be us "D:\personal_space\learning\Backend\nodejs-tm\reference\test\hello.html")
console.log(path.join(__dirname, 'test', 'hello.html'));
