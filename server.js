// custom-server.js
import { handler } from './build/handler.js';
import http from 'http';

const socketPath = process.env.PORT;

const server = http.createServer(handler);

server.listen(socketPath, () => {
  console.log(`Server is listening on Unix socket: ${socketPath}`);
});

// Handle server errors
server.on('error', (err) => {
  console.error('Server error:', err);
});
