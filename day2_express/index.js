//installing express:- npm i express

//creating express server
import express from 'express'
const app=express();
const port=3000;
app.listen(port,()=>console.log(`express server is running on ${port}`))