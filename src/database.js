const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.env.PASSWORD_DB,
	database: 'school',
});

mysqlConnection.connect((err) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log('DB is connected');
});

module.exports = mysqlConnection;
