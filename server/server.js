import express from 'express';
import path from 'path';
import api from './routes/api.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

// Serve the React static files after build
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Serve API
app.use('/api', api);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

