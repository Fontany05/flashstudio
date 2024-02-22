const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser')



//initialization
const app = express();

//setting
app.set('port' , 3000)
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.json());

//routes
app.use(require('./routes/index'));


//static files
app.use(express.static(path.join(__dirname, 'public')))


//listening the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

