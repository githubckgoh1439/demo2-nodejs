
exports.list = function(req, res){

  req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM students',function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('students',{page_title:"students - Node.js",data:rows});
                
           
         });
         
        
    });
  
};

exports.add = function(req, res){
  res.render('add_students',{page_title:"Add students - Node.js"});
};

exports.edit = function(req, res){
    
    var id = req.params.id;
    
    req.getConnection(function(err,connection){
       
        var query = connection.query('SELECT * FROM students WHERE id = ?',[id],function(err,rows)
        {
            
            if(err)
                console.log("Error Selecting : %s ",err );
     
            res.render('edit_students',{page_title:"Edit students - Node.js",data:rows});
                
           
         });
         
         
    }); 
};

/*Save the students*/
exports.save = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name,
            address : input.address,
            phone   : input.phone,
            sex   : input.sex, 
            ic   : input.ic,
            student_code   : input.student_code, 
			
			age   : input.age, 
            emergency_contact   : input.emergency_contact, 
            student_class   : input.student_class, 
			year   : input.year 
            
        
        };
        
        var query = connection.query("INSERT INTO students set ? ",data, function(err, rows)
        {
  
          if (err)
              console.log("Error inserting : %s ",err );
         
          res.redirect('/students');
          
        });
        
       
    
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            name    : input.name,
            address : input.address,
            phone   : input.phone,
            sex   : input.sex, 
            ic   : input.ic,
            student_code   : input.student_code, 

			age   : input.age, 
            emergency_contact   : input.emergency_contact, 
            student_class   : input.student_class, 
			year   : input.year 

        
        };
        
        connection.query("UPDATE students set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/students');
          
        });
    
    });
};


exports.delete_students = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM students  WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/students');
             
        });
        
     });
};


