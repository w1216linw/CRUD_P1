const cors = require('cors')
const express = require('express');
const db = require('./database/db')
const employeeRoute = require('./routes/employee');

const app = express();

app.use(cors());
app.use(express.json());

db.connect(err => {
  if(err) throw err;
  console.log("Connect to database");
})

app.use('/api/employee', employeeRoute);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
