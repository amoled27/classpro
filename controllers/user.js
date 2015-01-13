var usr = require('../models/User');

exports.getUsers = function(){

return usr.users;
}

 // this function will return all the values of users

exports.getUser = function(id){
for(var i=0; i<usr.users.length; i++){// this will return one particular users info
if(usr.users[i].id==id)
    return usr.users[i];
}
}

exports.compare = function(username, password)
{
   for(var i=0; i<usr.users.length; i++){ 
if(usr.users[i].username== username && usr.users[i].password == password){
return users[i];
}
    
    }
    return false;
}
exports.postLogin = function(req,res){
    var result = user.compare(req.body.email,req.body.password);
    if(!result){
    
    res.send("false");
    }else

res.send("Welcome"+result.name);


}
