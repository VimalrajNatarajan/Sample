
exports.mysqli = function(data,row)
{
     k = mysqli[row];    
     for(var i in data)
     {        
     	k = k.replace(new RegExp('{{'+i+'}}', 'g'), data[i]);    	
     }
     return k;
}

var mysqli = [];

mysqli[5]  = 'select * from Employee';
mysqli['testdb'] = 'insert into Employee (name,emailid,phone,username,password) values(?,?,?,?,?)';