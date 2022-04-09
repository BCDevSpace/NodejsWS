const fs = require('fs');
// fs.readFile('./blog/blog.txt', (err, data) =>{
//     if (err){
//         console.log (err);
//     }else
//         console.log(data.toString());
// } );

//console.log('last line');

// fs.writeFile('./blog/blog.txt', 'hello back', () =>{
//     console.log ('file was written');
// });

// fs.writeFile('./blog/blognotexist.txt', 'hello back', () =>{
//     console.log ('file was written');
// });

// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err){
//             console.log(err);     
//         }
//         console.log('Folder Created');
//     });
// }else{
//     fs.rmdir('./assets', (err) => {
//         if (err) console.log(err); else console.log('folder removed'); 
//     });
// }

// if(fs.existsSync('./blog/blognotexist.txt')){
//     fs.unlink('./blog/blognotexist.txt', (err) => {
//         if (err) console.log(err); else console.log('file removed');
//     });
// }
