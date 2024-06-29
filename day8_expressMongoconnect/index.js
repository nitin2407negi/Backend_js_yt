//nitinnegi20001
//nDsWqIXT0NO6JQNw
//monggose=> middle ware hai bridege hai
import express from  'express'
import mongoose from 'mongoose';
const app=express();

mongoose.connect("mongodb+srv://nitinnegi20001:nDsWqIXT0NO6JQNw@cluster0.8hooijn.mongodb.net/",{"dbName":"Nodejs_API"}).then(()=>console.log("mongo db is connect")).catch((error)=>{
    console.log(eroor);
})
const port=1000;
app.listen(port,()=>{
    console.log(`sever is running on ${port}`);

});