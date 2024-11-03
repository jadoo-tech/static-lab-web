import { handler } from './build/handler.js';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

// Add Socket.IO if needed
const io = new Server(server);

// SvelteKit handler
app.use(handler);

// Unix socket path
const socketPath = process.env.PORT;

server.listen(socketPath, () => {
  console.log(`Server running on Unix socket: ${socketPath}`);
});

// Cleanup on exit
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
