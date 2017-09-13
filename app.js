var Koa = require('koa');

var bodyParser = require('koa-bodyparser');
var app = new Koa();
var router = require('./controller.js')();

app.use(async (ctx,next) => {
	console.log(new Date());
	await next ();
});


app.use(bodyParser());
app.use(router);

app.listen(3000);
console.log('listening port 3000');