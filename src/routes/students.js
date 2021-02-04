const router = require('express').Router();

const mysqlConnection = require('../database.js');

router.get('/', (req, res) => {
	mysqlConnection.query('SELECT * FROM students;', (err, rows, fields) => {
		if (!err) {
			res.json(rows);
			return;
		}

		console.log(err);
	});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query(
		'SELECT * FROM students WHERE code = ?;',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json(rows[0]);
			}

			console.log(err);
		}
	);
});

router.post('/', (req, res) => {
	const { name, career } = req.body;
	const query = `INSERT INTO students (name, career) values (?, ?)`;
	mysqlConnection.query(query, [name, career], (err, rows, fields) => {
		if (!err) {
			res.json({ Status: 'Student saved' });
			return;
		}
		console.log(err);
	});
});

router.put('/:id', (req, res) => {
	const { name, career } = req.body;
	const { id } = req.params;
	const query = `UPDATE students SET name = ?, career = ? WHERE code = ?`;
	mysqlConnection.query(query, [name, career, id], (err, rows, fields) => {
		if (!err) {
			res.json({ Status: 'Student saved' });
			return;
		}
		console.log(err);
	});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	mysqlConnection.query(
		'DELETE FROM students WHERE code = ?',
		[id],
		(err, rows, fields) => {
			if (!err) {
				res.json({ Status: 'Student deleted' });
				return;
			}

			console.log(err);
		}
	);
});

module.exports = router;
