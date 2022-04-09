const fs = require('fs');

const readStream = fs.createReadStream('./blog/streamtest.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./blog/newStreamfilecreate.txt');

// readStream.on('data', (chunk) =>{
//     console.log('----------------New Chunk------------');
//     console.log(chunk);
//     //console.log(chunk.toString());
//     writeStream.write('\n..............New Chunk...............\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);