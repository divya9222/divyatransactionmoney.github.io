const http=require('http');
const fs=require('fs');

//these both are port and local host for our website
const hostname = '127.0.0.1';
const port = 3000;
//these are the variables we have made where we can add the function a particular external file 
const project=fs.readFileSync('index.html');
const transfer=fs.readFileSync('./transfer.html');
const contact=fs.readFileSync('./contact.html');


//now server create krenge by using arrow function..here req is request and res is response
const server=http.createServer((req,res)=>{
    console.log(req.url);
url=req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url=='/'){
        res.end(project);
    }
    
     else if(url=='/transfer'){
        res.end(transfer);
    }
     else if(url=='/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;  
        res.end("<h1>404 Server not found</h1>");
    }
});

//and is listen se hamara server  chalu hjaega
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });