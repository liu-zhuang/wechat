const Sha = require('sha1');
const axios = require('axios');

const config = {
	appid: 'wx2bb48447b79d4ceb',
	secret: '4bf4428e3e2e08e21fe3f66b6b718051'
}

const api = {
	accessToken: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential'
}

const check = function (option) {

	return async (ctx, next) => {
		let signature = ctx.query.signature;
		let timestamp = ctx.query.timestamp;
		let nonce = ctx.query.nonce;
		let echostr = ctx.query.echostr;
		let sort = [option.token, timestamp, nonce].sort().join('');
		let sha1 = Sha(sort);

		if (sha1 === signature) {
			ctx.response.body = echostr;
		} else {
			ctx.response.body = 'wrong';
		}

		next();
	};
};

const getAccessToken = function () {
	debugger;
	const appid = config.appid;
	const appsecret = config.secret;
	let url = api.accessToken + `&appid=${appid}&secret=${appsecret}`;
	axios.get(url)
	.then(res => {
		console.log(res.data);
	})
};

module.exports = {
	check,
	getAccessToken
};	