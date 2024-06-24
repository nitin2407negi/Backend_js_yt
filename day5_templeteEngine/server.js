import express from 'express'
import path from 'path'
const app=express()

app.use(express.static(path.join(path.resolve(),'public')))

app.get('/',(req,res)=>{
    const product={
        title:"sony",
        price:50000,
    }
    res.render('index.ejs',{product})
    // console.log("serving ejs file");
})
const port=1000;
app.listen(port,()=>console.log(`server is running on ${port}`))