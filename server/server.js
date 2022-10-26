require('dotenv').config()
const { config } = require('dotenv');
const cors = require('cors')
const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user:"root",
  host: "localhost",
  password: process.env.PASSWORD,
  database: "employeeSystem",
});

db.connect(err => {
  if(err) throw err;
  console.log("Connect to database");
})

app.post('/create' , (req, res) => {
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

app.get('/getEmployees', (req, res) => {
  db.query('SELECT * FROM employees', (err, result) => {
    if (err) console.log(err);
    else {
      res.send(result)
    }
  })
})

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
