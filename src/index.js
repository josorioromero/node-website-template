import express from 'express';
import path from 'path';

const app = express();
const serverUrl = 'http://127.0.0.1:';
const serverPort = '3000';

//127.0.0.1:3000/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/index.html'));
});

//127.0.0.1:3000/about
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/about.html'));
});

//127.0.0.1:3000/contact
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/contact.html'));
});

app.listen(3000);

console.log(`Server is up and running in ${serverUrl}${serverPort}`);
