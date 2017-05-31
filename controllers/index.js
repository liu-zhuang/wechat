var fn_index = async (ctx, next) => {
	// let appID = 'wx5db51f3c5c381ed2',
	// appsecret = '4c797335101c71a01c1713b3f83fd26d',
	// Token = 'xiaoyebaomemeda';

	console.log(ctx.querystring);
	ctx.response.body = `<h1>Index </h1><h3>koa1</h3><h4>${ctx.querystring}</h4>`;
};

var fn_hello = async (ctx, next) => {
	var name = ctx.params.name;
	ctx.response.type = 'text/html';
	ctx.response.body = `<h3>Hello ${name}</h3>`;
};

module.exports = {
	'Get /': fn_index,
	'Get /hello/:name': fn_hello
};	
