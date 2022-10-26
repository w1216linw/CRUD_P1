const express = require('express');
const db = require('../database/db');
const router = express.Router();

// get all employees
router.get('/getAll', (req, res) => {
  db.query('SELECT * FROM employees', (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result)
    }
  })
})
// add a single employee
router.post('/create' , (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const wage = req.body.wage;
  const position = req.body.position;

  db.query('insert into employees (name, age, country, position, wage) values (?,?,?,?,?)',
  [name,age,country,position,wage],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted")
    }
  });
});

module.exports = router