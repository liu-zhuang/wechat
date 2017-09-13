var fn_check = async (ctx, next) => {
	var signature = ctx.query.signature;
	var echostr = ctx.query.echostr;
	var timestamp = ctx.query.timestamp;
	var nonce = ctx.query.nonce;
	console.log(ctx.query);
	var token = "liuzhuangtech";
	var str = [token, timestamp, nonce].sort().join('');
	var sha1 = require('sha1');
	var sha = sha1(str);
	console.log(sha);
	if(sha == signature) {
		ctx.response.body = `${echostr}`;
		return true;
	} else {
		ctx.response.body = 'wrong';
		return false;
	}
};

module.exports = {
	'Get /check': fn_check
}