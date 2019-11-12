var express = require('express')

var app = express()

var PORT = process.env.PORT || 8800;

app.use(express.urlencoded({extend : true}));
app.use(express.json());

app.get('/',function(req, res){
    res.send('Hello dude')
});




app.listen(PORT, function(){
    console.log(PORT)
})