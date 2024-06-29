import express from 'express';
import mongoose from 'mongoose';
import { userRegister } from './Controllers/users.js';

const app = express();
app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://nitinnegi20001:nDsWqIXT0NO6JQNw@cluster0.8hooijn.mongodb.net/", { "dbName": "Nodejs_API" }).then(() => {
    console.log("mongo db is connect")
}).catch((error) => {
    console.log(error);
})

app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.post('/',userRegister)

const port = 1000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})