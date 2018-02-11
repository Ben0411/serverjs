var express = require("express");
var app = express();
var bodyParser = require('body-parser');

var friends = [{name: 'Thor', game: 'Donjon et dragon'},{name: 'Gandalf', game: 'Seigneur des anneaux'}, {name:'Lanfeust', game:'Lanfeust de Troy'}];

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    next();
});

var api = express.Router();

api.get('/friends', (req, res)=>{
    res.json(friends);
});

api.post('/friends', (req, res)=>{
    console.log(req.body);
    friends.push(req.body);
    res.json(req.body);
})

app.use('/api', api);


app.listen(63145);