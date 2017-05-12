// 返回path路径下的所有js文件
var readFile = function (path) {
	var fs = require('fs');
	var files = fs.readdirSync('./'+path);
	var jsFiles = files.filter((f) => {
		return f.endsWith('.js');
	});
	return jsFiles;
};

// 根据.js文件反射路由
var SetRouter = function (path) {
	// 声明路由
	var router = require('koa-router')();

	var jsFiles = readFile(path);
	for (var js of jsFiles) {
		let mapping = require(__dirname + '/' + path + '/' + js); //分别引入每个js文件
		for (var url in mapping) {
			// 便利每个controller文件中的路由
			if(url.startsWith('Get')) {
				// method: get
				router.get(url.replace('Get ',''), mapping[url]);
			} else if (url.startsWith('Post'),mapping[url]) {
				// method: post
				router.post(url.replace('Post ',''), mapping[url]);
			} else {
				// 非路由的
				console.log('this is not router file');
			}
		}
	}
	return router.routes();
};


module.exports = function (path) {
	return SetRouter( path || 'controllers');
};