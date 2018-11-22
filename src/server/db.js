const mysql = require('mysql');

let connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "password2"
});
connection.connect((err)=>{
	if(err){
		console.error('connection issue: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
	connection.query('use mysql',(err,res,fields)=>{
		console.log(err,res,fields);
	});
});


let dbApi = {};
dbApi.addLoan = ()=>{
	//haha figure out sql
}
module.exports = dbApi;
