const express = require('express');

const PORT = process.env.PORT || 80;
let app = express();

app.use((req,res,next)=>{
	next();
	return;
});
app.use(express.static('dist'));
app.listen(PORT,()=>{
	console.log(`Listening on port ${PORT}`);
});

/*add loan, should we have a private key on the machines that signs the request or something?*/
