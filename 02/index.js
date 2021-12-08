const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'file-1.txt'), 'utf-8');
    console.log(data);
    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\n Nice to meet you!');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'renamePromiseWrite.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'renamePromiseWrite.txt'));
    console.log(newData.toString());
  } catch(err) {
    console.log(err);
  }
}

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'file-1.txt'), 'utf8', (err, data) => {
//   if(err) throw err;
//   console.log(data.toString());
// });

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
//   if(err) throw err;
//   console.log('Write completed...');
// });

// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing how to append files', (err) => {
//   if(err) throw err;
//   console.log('Append completed...');
// });

// exit on uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
});