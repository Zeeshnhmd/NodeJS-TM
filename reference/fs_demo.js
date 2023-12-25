const fs = require('fs');
const path = require('path');

//* Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
// 	if (err) throw err;
// 	console.log('Folder Created');
// });

//* Create and write
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'Hello world',
// 	(err) => {
// 		if (err) throw err;
// 		console.log('File written to...');

// 		//* Append file
// 		fs.appendFile(
// 			path.join(__dirname, '/test', 'hello.txt'),
// 			' I love node.js',
// 			(err) => {
// 				if (err) throw err;
// 				console.log('File written to...');
// 			}
// 		);
// 	}
// );

/*
 * - Read file
 * - "utf8" is mandatory if we dont provide "utf8" then it will give us "raw buffer". Something like this "<Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64 20 49 20 6c 6f 76 65 20 6e 6f 64 65 2e 6a 73>"
 */
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
// 	if (err) throw err;
// 	console.log(data);
// });

//* Rename file
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'helloworld.txt'),
	(err) => {
		if (err) throw err;
		console.log('file renamed');
	}
);
