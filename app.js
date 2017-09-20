const Koa = require('koa');
const Sha = require('sha1');
const route = require('koa-route');
const wechat = require('./middleware/wechat');

const app = new Koa();

const main = ctx => {
	ctx.response.type = 'html';
	ctx.response.body = '<h1>wechat</h1>'
}
const config = {
	wechat: {
		token: 'yebaomemeda'	
	}
	
};


app.use(route.get('/', main));
app.use(route.get('/check', wechat.check(config.wechat)));
app.use(route.get('/getAccessToken', wechat.getAccessToken);

app.listen(3000);

console.log('server is running at 3000');