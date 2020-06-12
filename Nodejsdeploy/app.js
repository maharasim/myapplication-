var http=require('http');
var fs=require('fs');//to get the html file 
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var url=req.url;
    if(url==="/"){
        fs.readFile("head.html",function(err,page){
            if(err)
               res.write("Head.html file not found");
            else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write(page);
                res.end();
            }
        });
    }
else if(url==="/tail"){
    fs.readFile("tail.html",function(err,page){
        if(err)
           res.write("tail.html file not found");
        else{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(page);
            res.end();
        }
});

}
}).listen(3000,function(){
    console.log("Server started port:3000");
});
