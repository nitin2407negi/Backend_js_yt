import { dir } from 'console';
import { readdir } from 'fs';
import {readFile,writeFile,appendFile,mkdir} from 'fs/promises'

//read file

const readFilecontent=async(filePath)=>{
  const data=await readFile(filePath,'utf-8')
  console.log(data);
}
// readFilecontent("sample.txt");

//write file

const createFile=async(fileName,fileContent)=>{
  await writeFile(fileName,fileContent)
}
// createFile('inheritace.java','this is my inheritance code')

//append file=changes content

const appendFileContent=async(fileName,addContent)=>{
    await appendFile(fileName,addContent)
}
// appendFileContent('sample.txt',' this is appending code')


// make a directory or folder
const makeDirectory=async(dirName)=>{
    await mkdir(dirName,{recursive:true})
}
// makeDirectory('java/inheritance')


//read dir
const readDirectory=async(dir)=>{
    const data=await readdir(dir)
    console.log(data);
}
// readDirectory('./java/inheritance')
