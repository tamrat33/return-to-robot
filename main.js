const express = require('express');
 const app = express();
 const path = require('path');
 const fs = require('fs');
 const userData = require('./data.js');
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
res.render('homepage', userData);
})
app.get('/:id', function(req, res) {
 let foundUser = userData.users.find(function(user){
   return user.id == req.params.id;
 });
 res.render('userpage', { users: [foundUser]});
})
app.listen(3000, function(req, res){
 console.log('Successfully connected to http://localhost:3000');
 console.log(__dirname);
})
