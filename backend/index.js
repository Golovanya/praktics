import express from 'express';
import { termsData,  } from './data.js';
import cors from 'cors';

const app = express()
const port = 3000
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/terms', (req, res) => {
    res.send(termsData);
  });

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`)
})