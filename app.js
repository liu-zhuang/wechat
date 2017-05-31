var Koa = require('koa');
var app = new Koa();
var router = require('./controller.js')();

var sha1 = require('sha1');
var bodyParser = require('koa-bodyparser');

app.use(async (ctx,next) => {
	console.log(new Date());
	await next ();
});


app.use(bodyParser());
app.use(router);



app.listen(3000);
console.log('listening port 3000');