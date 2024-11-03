import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// SvelteKit handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Unix socket path
const socketPath = process.env.PORT || 3000;

app.listen(socketPath, () => {
  console.log(`Server is running on port ${socketPath}`);
});

// Cleanup on exit
process.on('SIGINT', () => {
  console.log('Server closed');
  process.exit(0);
});
