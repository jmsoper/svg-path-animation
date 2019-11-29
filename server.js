const path = require('path');

// init project
const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

function checkHttps(req, res, next){
  // protocol check, if http, redirect to https
  
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1){
    return next()
  } else {
    console.log("just http")
    res.redirect('https://' + req.hostname + req.url);
  }
}

app.all('*', checkHttps)

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.render('index');
});

app.get('/projects', function(request, response) {
  response.render('code');
});

app.get('/resume', function(request, response) {
  response.render('resume');   
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
