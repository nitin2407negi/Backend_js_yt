import path from 'path'
//join two or more files

const fullPath=path.join('/path','file.java')
// console.log(fullPath);

//absolute path

const absolutePath=path.resolve('folder','file.txt')
// console.log(absolutePath);

//file directory
const fileDirectory=path.dirname('/path/to/main.java')
// console.log(fileDirectory);

//base path

const basePath=path.basename('/public/java/constructor.java')
// console.log(basePath);

//extension name

const extName=path.extname('negi.mp3')
console.log(extName);