var express = require ("express"),
app = express();


///
app.get("/",function(req,res){
console.log(res.send("hello world2"));
});

app.get("/alamat",function(req,res){
console.log(res.send("hello world22"));
});

app.listen(8080,function(){
	console.log("server bisa jalan coy");
});