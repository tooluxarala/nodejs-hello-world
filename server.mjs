
import { createServer } from 'node:http';

import  url from 'url';

const hostname = '127.0.0.1';
const port = 3002;

const server = createServer((req, res) => {
    if(req.headers['accept'] !== 'text/plain'){
        res.writeHead(415, { 'Content-Type': 'text/plain' });
        res.end('Unsopported MediaType!\n');
    }else{
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
    }
});

// starts a simple http server locally on port 3000
server.listen(port, hostname, () => {
  console.log(`Listening on ${hostname}:${port}`);
});

/// Protocole HTTP client/server
// Headers:
//Content-Type: text/plain
// Body:
//Hello World!
