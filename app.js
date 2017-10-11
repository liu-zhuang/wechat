const Koa = require('koa');
const Sha = require('sha1');
var cors = require('koa2-cors');
const route = require('koa-route');
const wechat = require('./middleware/wechat');

const app = new Koa();
app.use(cors());
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
app.use(route.get('/getAccessToken', wechat.getAccessToken));
app.use(route.get('/getOcr', wechat.getOCR));

app.listen(4000);

console.log('server is running at 4000');