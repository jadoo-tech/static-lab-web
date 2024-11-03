// custom-server.js
import { handler } from './build/handler.js';
import http from 'http';

const socketPath = process.env.PORT;


const server = http.createServer((req, res) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    // Trust the proxy by adjusting the request headers
    req.headers['x-forwarded-host'] = req.headers['host'];
    req.headers['host'] = req.headers['x-forwarded-host'];

    handler(req, res);
});


server.listen(socketPath, () => {
  console.log(`Server is listening on Unix socket: ${socketPath}`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});
