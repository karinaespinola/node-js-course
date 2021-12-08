const fs = require('fs');

const rs = fs.createReadStream('./files/file-2.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./files/stream-file-3.txt');

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk);
// });

// Even a more efficient way to stream data:

rs.pipe(ws);