// custom-server.js
import { handler } from './build/handler.js';
import http from 'http';
import { unlinkSync } from 'fs';

const socketPath = process.env.PORT;


// Remove existing socket file
try {
    unlinkSync(socketPath);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Error removing socket file:', err);
      process.exit(1);
    }
  }

const server = http.createServer((req, res) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    // Trust the proxy by adjusting the request headers
    // req.headers['x-forwarded-host'] = req.headers['host'];
    // req.headers['host'] = req.headers['x-forwarded-host'];

    handler(req, res);
});


server.listen(socketPath, () => {
  console.log(`Server is listening on Unix socket: ${socketPath}`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});
