const express = require('express');
const morgan = require('morgan');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));

console.log(app.get('views'));
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api', require('./routes/students'));

//static files
// app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));

//start server
app.listen(app.get('port'), () => {
	console.log('server on port: ' + app.get('port'));
});
