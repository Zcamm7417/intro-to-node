var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if (filename == './') {filename = './index2';}

    filename = filename + ".html";
    console.log(filename);
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'content-Type': 'text/html'});
            return res.end("404 Not found");
        }
        res.writeHead(200, {'content-Type': 'text/html'});
        res.write(data);
        console.log("...Incoming request: " + req.url);
        res.end();
    });
}).listen(PORT);


console.log("server Listening on port 8080...");






