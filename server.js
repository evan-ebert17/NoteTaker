
const express = require('express');

const notesdb = require('./db/db.json');
const fs = require('fs');

const app = express();

const PORT = 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});


app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
})
app.get('/api/notes', (req, res) => {
  fs.readFile(__dirname + '/db/db.json', 'utf8', (err, data) => {
    res.json(JSON.parse(data));
  })
})
app.post('/api/notes', (req, res) => {
  fs.readFile(__dirname + '/db/db.json', 'utf8', (err, data) => {
      
    var parsedData = JSON.parse(data);
    parsedData.push(req.body);
    console.log('parsedData', parsedData)
    fs.writeFile(__dirname + '/db/db.json', JSON.stringify(parsedData), (err, data) => {
      err ? console.error(err) : console.log(data);
      res.json(parsedData);
    })
  })
})
app.delete(`/api/notes/`, (req, res) => {
  fs.readFile('db/db.json', 'utf8', (err, data) => {
    err ? console.error(err) : console.log(data);
    //read the title as the id
  })
})

app.listen(PORT, () => {
  console.log('server on')
});
