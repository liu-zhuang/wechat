const Sha = require('sha1');
const axios = require('axios');
const crypto = require('crypto');

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

		await next();
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


const getOCR = (ctx, next) => {

	// return new Promise((resolve, reject) => {
		console.log(ctx);
		const AppID = '10101761';
		const SecretID = 'AKID7B1pTwVVXySUemoNQI7qSt7DAwhM83HN';
		const SecretKey = 'OdhaIpofKoDUccSK1Wq0ykXDJQWXN3Xt';
		const QQ = '70458055';
		const TimeStamp = parseInt(Date.now() / 1000);
		const ExpireTime = parseInt(Date.now() / 1000) + 2592000;
		const Rdm = parseInt(Math.random() * Math.pow(2, 32));

		var origin = `a=${AppID}&k=${SecretID}&e=${ExpireTime}&t=${TimeStamp}&r=${Rdm}&u=${QQ}`;

		var data = new Buffer(origin,'utf8');

		var res = crypto.createHmac('sha1',SecretKey).update(data).digest();

		var bin = Buffer.concat([res,data]);

		var sign = bin.toString('base64');

		ctx.body = sign;
	};


	module.exports = {
		check,
		getAccessToken,
		getOCR
	};	