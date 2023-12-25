// const Person = require('./person');

// const person1 = new Person('Jhon Doe', 30);

// person1.greeting();

//* Below code is events example
const fs = require('fs');
const path = require('path');
const Logger = require('./logger');

const logger = new Logger();
// fs.mkdir(path.join(__dirname, '/event_logs'), {}, (err) => {
// 	if (err) throw err;
// });
logger.on('message', (data) =>
	fs.writeFile(
		path.join(__dirname, '/event_logs', 'event_log.txt'),
		`ID: ${data.id}, Message: ${data.msg}\n`,
		(err) => {
			if (err) throw err;

			fs.appendFile(
				path.join(__dirname, '/event_logs', 'event_log.txt'),
				`ID: ${data.id}, Message: ${data.msg}\n`,
				(err) => {
					if (err) throw err;
				}
			);
		}
	)
);

logger.log('Hello world');
