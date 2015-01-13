var express = require('express');
var hbs= require('hbs');
var path = require('path');
var bodyParser = require('body-parser');
//user model
var userController = require('./controllers/user'); // since this is manually created file we use ./users
// and we dont put .js for user file as the server.js in same directory as user.js
var app = express();
app.use(express.static('public')); // 
console.log(path.join(__dirname,'views'));

app.set('views',path.join(__dirname,'views'));// te;ls where view folders are
app.set('view engine','html'); //html is specifies to tell server that only html files are included
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false 
}));



app.get('/',function(req,res){ //routing
        res.render('index',{ 
            title:"home", //anyrandom variables are created as title and users
            users:userController.getUsers});  //since js document name is user and the function name created is GETUSERS its user.getusers
        });
app.get('/users/:id', function(req,res){
var users = userController.getUser(req.params.id); //csalls getuser with parameter
    res.render('profile',{
    title:"User Profile",
        abc: users
    });
});

app.get('/signup',function(req,res){  //routing
res.render('signup',{
title: "signup"

});
    //callback function
});

app.get('/login',function(req,res){ //routing
res.render('login',{
title:"login"
});
});

app.post('/login', userController.postLogin);
         
         
         
         
app.get('/about',function(req,res){ //routing
res.sendfile('about',{
    title: "about"

});
});




app.listen(3000);
