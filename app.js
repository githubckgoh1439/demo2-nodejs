
//Module dependencies.
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

//load students route
var students = require('./routes/students'); 
var app = express();

var connection  = require('express-myconnection'); 
var mysql = require('mysql');


// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());

app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//setup mysql connection  
app.use(
    
    connection(mysql,{
        
        host : '127.0.0.1',
	    user: 'root',
        password : 'root',
        port : 3306, 
        database:'gpnodejs'

    },'pool') //or single

);



app.get('/', routes.index);
app.get('/students', students.list);
app.get('/students/add', students.add);
app.post('/students/add', students.save);
app.get('/students/delete/:id', students.delete_students);
app.get('/students/edit/:id', students.edit);
app.post('/students/edit/:id',students.save_edit);


app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
