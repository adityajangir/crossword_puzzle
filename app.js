const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/crossword_puzzle');
const crosswordSchema = mongoose.Schema({
  array: []
})


const Answer = mongoose.model('Answer', crosswordSchema);



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));


app.get("/", function(req,res){
  //
  // var ans = new Answer({
  //   _id: "adityajan"
  // });
  res.render("index");
});


app.post('/ans', function(req,res){
  var ans = new Answer({
    array: req.body.submittedCrossword
  });
  ans.save()
  console.log(ans.array)

  // const l1q1res = req.body
  // Answer.updateOne(
  //   { _id: "adityajan" },
  //   { $set: { namesmh: l1q1res  }},
  // ).exec();
  res.redirect("/")
})


app.listen(3000,function(){
  console.log("Server started at port 3000")
})
