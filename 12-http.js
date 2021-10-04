const http = require("http");
const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to our homePage");
	} else if (req.url === "/about") {
		res.end(`Here is our short history`);
	} else {
		res.end(`
	<h1>Oops!</h1>
	<p>We cant seem to find the page you are looking for</p>
	<a href="/">home page</a>`);
	}
});

server.listen(5000);
