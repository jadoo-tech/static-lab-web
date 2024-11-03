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



const callback = res => {

    res.setEncoding('utf8');
    res.on('data', data => console.log(data));
    res.on('error', data => console.error(data));

};

server.listen(socketPath, callback);

// Cleanup on exit
process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
