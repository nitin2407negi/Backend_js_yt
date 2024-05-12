import http from 'http'
const server=http.createServer((req,res)=>{
    // console.log("server is hit by someone");
    //  console.log(req.url);
    // res.end("bahar se hi chle jao");
//routing
    if(req.url==='/superman'){
        res.end("you are belong from DC")
    }
    else if(req.url==='/spiderman')
        {
            res.end("you are belong from marvel");
        }
})
const port=2000
server.listen(port,()=>console.log(`server is running on ${port}`))