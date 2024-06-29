import { log } from 'console';
import express from 'express'
import path from 'path'
const app=express()
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(path.resolve(),'public')))

app.get('/',(req,res)=>{
    const product={
        title:"sony",
        price:50000,
    }
    res.render('index.ejs',{product})
    // console.log("serving ejs file");
})

app.get('/register',(req,res)=>{
    res.render('register.ejs')
})
app.get('/login',(req,res)=>{
    res.render("login.ejs")
})
app.get('/form',(req,res)=>{
    res.render('form.ejs');
})
app.post('/form',(req,res)=>{
    console.log("this data is coming by req.body",req.body);
})

app.post('/register',(req,res)=>{
    console.log(req.body);
})

app.post('/login',(req,res)=>{
    console.log(req.body);
})
const port=1000;
app.listen(port,()=>console.log(`server is running on ${port}`))