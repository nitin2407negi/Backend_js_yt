import express from 'express'
const app=express()

//C=create=>POST (method)
//R=read=>GET (method)
//U=Update=>PUT (method)
//D=delete=>DELETE (method)

app.get('/',(req,res)=>{
    console.log("this is home route");
    res.send("this is a response");
})

app.get('/products',(req,res)=>{
    res.json({
        products:[
            {title:"iphone",price:199999},
            {title:"samsung",price:18000}
        ]
    })
})


const port=3000
app.listen(port,()=>console.log(`server is running on ${port}`))


