//server banana
// import http from 'http'
// const server=http.createServer((req,res)=>{
//     console.log("server is stablished succesfully")
//     const date=new Date();
//     console.log("last time server hit",date.toLocaleDateString());
//     res.end("thank you for request")
// })
// const port=2000;
// server.listen(port,()=>console.log(`server is running on ${port}`))


import http from 'http'

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
        res.end("you are in home route");
    }
    else if(req.url=='/negi'){
        res.end("you are in negi route");
    }
    else{
        console.log("invalid request");
    }
})


const port=1000;
server.listen(port,()=>console.log(`server is running on port ${port}`))


