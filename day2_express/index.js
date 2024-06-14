//installing express:- npm i express
  
//express=>backend web application framework hai nodejs ka api banane ke liye 

//node module=>ye ek engine hai jsime saare packages install honge jo pure application ko chlate hai

//package.json=>description hai jese bill
                      

//creating express server

import express from 'express'
const app=express();
const port =3000;
app.listen(port,()=>console.log(`express server is running on ${port}`));
