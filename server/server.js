const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

var con = mysql.createConnection({
    host: "cc-class-db1.cfr1e9nkeljk.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "pankajsharma123",
    database: "Covid19"
  });

app.get('/message', (req, res) => {

    res.json({message:"Hello from server"});

});


app.get('/table', (req, res) => {

    let record ="";

    con.query("SELECT * FROM Covid_details;", (err, results, fields) => {
        if(err) throw err;
        record = (results);
        res.json({tables:record});
    });

});


app.post('/add', (req, res) => {

  console.log(`hey '${req.body}'`);
  // const public = req.query.data || true; // set defaults
  // let qry = {
  //    State_Name, 
  //    Date_of_Record, 
  //    No_of_Samples, 
  //    No_of_Deaths, 
  //    No_of_Positive, 
  //    No_of_Negative, 
  //    No_of_Discharge } = req.data;

  // let newUser = {
  //   user_id:
  //   user_name:'someone'
  //   }

  con.query(
    'INSERT INTO Covid_details (State_Name, Date_of_Record, No_of_Samples, No_of_Deaths, No_of_Positive, No_of_Negative, No_of_Discharge ) VALUES (?,?,?,?,?,?,?)',
    [req.body.State_Name, req.body.Date_of_Record, req.body.No_of_Samples, req.body.No_of_Deaths, req.body.No_of_Positive, req.body.No_of_Negative, req.body.No_of_Discharge],
    (err, results) => {
      if(err) throw err;
      res.json({message:'hello'});   
    }
  );
  con.end();
});

app.listen(3000, ()=> {
    console.log('Process running on port 3000')
})



