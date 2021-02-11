import path from 'path';
import express from 'express';

const PORT = process.env.HTTP_PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'Client', 'build')));

app.get('/', (req, res) => {
  res.send('just gonna send it');
});

app.get('/flower', (req, res) => {
  res.json({
    name: 'Hellscar',
    color: 'Ankle pics 1 gold'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});