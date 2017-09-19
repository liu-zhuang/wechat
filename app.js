const Koa = require('koa');
const Sha = require('sha1');
const route = require('koa-route');

const app = new Koa();

const main = ctx => {
	ctx.response.type = 'html';
	ctx.response.body = '<h1>wechat</h1>'
}
const config = {
	token: 'liuzhuangtech'
};

const check = ctx => {
	//console.log('query:'+ctx.query);
	// console.log('nonce:'+ctx.query.nonce);
	console.log(ctx.query.signature);
	console.log(ctx.query.timestamp);
	console.log(ctx.query.nonce);
	console.log(ctx.query.echostr);
	let signature = ctx.query.signature;
	let timestamp = ctx.query.timestamp;
	let nonce = ctx.query.nonce;
	let echostr = ctx.query.echostr;
	let sort = [config.token, timestamp, nonce].sort().join();
	console.log(sort);
	let sha1 = Sha(sort);
	console.log(sha1);
	if (sha1 === signature) {
		this.body = echostr + '';
	} else {
		this.body = 'wrong';
	}
}

app.use(route.get('/', main));
app.use(route.get('/check', check));

app.listen(3000);

console.log('server is running at 3000');