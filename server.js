const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
require('./data/reddit-db');

const exphbs  = require('express-handlebars');
require('./controllers/posts.js')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressValidator());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


module.export = app;
