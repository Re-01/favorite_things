const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT ID, Type, Name, Description, avatar FROM tbl_thing";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { data: result });
    })
})

router.get('/users/:id', (req, res) => {
    console.log('This is a dynamic route!');

    let query = `SELECT * FROM tbl_thing WHERE ID="${req.params.id}"`;
    
    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result);
        
        res.json(result);

    })
    // console.log(req.params.id)
    
    
        // sql.query(query, (err, result) => {
           // if (err) { throw err; console.log(err); }
    
           // console.log(result); // should see objects wrapped in an array
    
        // result[0].social = result[0].social.split(",").map(function(item) {
         //   item = item.trim();

        //    return item;
    //    })

     //   console.log("after trim / conversion:", result[0]);

        // render the home view with dynamic data
   //     res.render({ layout: `${req.params.id}`)};
})

module.exports = router;