function route(handle, pathname,response){
	console.log("About to route a request for " + pathname);
	if (typeof handle[pathname] === 'function'){
		handle[pathname](response);
	}else{
		console.log("No handler found.");
	}
}

exports.route = route;
