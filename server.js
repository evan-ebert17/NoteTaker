
const express = require('express');
// TODO: Require the json file located in `/db`
const notesdb = require('./db/db.json');
const fs = require('fs');
// TODO: Create an `app` variable set to the value of `express()`
const app = express();

const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});

// TODO: Create a GET route for `/api` that will return the content of our json file
app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html');
})
app.get('/api/notes', (req, res) => {
  fs.readFile(__dirname + '/db/db.json', 'utf8', (err, data) => {
    //err?console.error(err):console.log(data));
    console.log(req.body);
    res.json(JSON.parse(data));
  })
})
app.post('/api/notes', (req, res) => {
  fs.readFile(__dirname + '/db/db.json', 'utf8', (err, data) => {
    //err?console.error(err):console.log(data));
    console.log('req.body', req.body);
  
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
// TODO: Have the app listen on port 3001
app.listen(PORT, () => {
  console.log('server on')
});
