var fn_index = async (ctx, next) => {
	ctx.response.body = `<h1>Index </h1><h3>koa1</h3>`;
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