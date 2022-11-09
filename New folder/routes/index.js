var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Happy Diwali' });
})
/*Get Hello page */
router.get('/hello',(req,res)=>{
  res.render("index",{a:10,b:20})
})
/* Renderingform */
router.get("/form_stuff",(req,res)=>{
  res.render("form")
})
router.post('/submit',function(req,res){
  res.send(req.body.fname+" "+req.body.lname+" "+req.body.email)
});
module.exports = router;
