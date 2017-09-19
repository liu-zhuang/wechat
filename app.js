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
	let signature = ctx.request.signature;
	let timestamp = ctx.request.timestamp;
	let nonce = ctx.request.nonce;
	let echostr = ctx.request.echostr;
	let sort = [config.token, timestamp, nonce].sort();
	let sha1 = Sha(sort.join());
	if (sha1 === signature) {
		return true;
	} else {
		return false;
	}
}

app.use(route.get('/', main));
app.use(route.get('/check', check));

app.listen(3000);

console.log('server is running at 3000');