var fn_get_register = async (ctx, next) => {
	var html = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>register</title>
	</head>
	<body>
	<form action="/register" method="post">
	姓名：<input type="text" name='name' value=''>
	年龄：<input type="" name="age">
	<button type="submit">submit</button>
	</form>
	</body>
	</html>		
	`;
	ctx.response.type = 'text/html';
	ctx.response.body = html;
};


var fn_post_register = async (ctx, next) => {
	console.log(`name:${ctx.request.body.name}
		age: ${ctx.request.body.age}`);
	ctx.response.body = `<span>submited!</span>
	name:${ctx.request.body.name}
	age:${ctx.request.body.age}`;
};


module.exports = {
	'Get /register': fn_get_register,
	'Post /register': fn_post_register
};