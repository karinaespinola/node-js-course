const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'file-1.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data.toString());
});

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
  if(err) throw err;
  console.log('Write completed...');
});

fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing how to append files', (err) => {
  if(err) throw err;
  console.log('Append completed...');
});

// exit on uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
});