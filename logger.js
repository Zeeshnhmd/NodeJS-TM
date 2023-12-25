const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
	log(msg) {
		// Call event
		this.emit('message', { id: uuid.v4(), msg });
	}
}

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
