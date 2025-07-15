const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
     if (url === '/')
    {
        res.write('<html><head><title>UserBase</title></head>');
        res.write('<body><h1>Welcome to the User Database</h1>');
        res.write('<form action ="/create-user" method="POST"><input type="text" name="username"><button type="submit">SEND</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users')
    {
        res.wirte('<ul><li>Andrew12</li><li>Tom7945</li><li>Aqua4444</li></ul>');
        return res.end();
    }
    if(url ==='/create-user' && method==='POST')
    {
        const body = [];
        req.on('data', (chunk) =>
        {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = ArrayBuffer.concat(body).toString();
            console.log(parsedBody);
            return res.end();
        })
 
    }
     res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1> Hello from my Node.js Server! </h1></body>');
  res.write('</html>');
  res.end();

});
server.listen(3000);

