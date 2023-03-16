const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items =["study","code","play"];
let workItems =[];

app.get("/", function(req, res){
  let day = date.getDate();
  res.render("list",{ listTitle:day, newListItems:items });
});

app.post("/", function(req, res){
  if(req.body.list ===" Work List "){
    workItems.push(req.body.newItem);
    res.redirect("/work");
  }
  else{
    items.push(req.body.newItem);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){
  res.render("list",{ listTitle:"Work List", newListItems:workItems});

});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
