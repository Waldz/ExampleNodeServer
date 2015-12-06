//JSLint directives.
/*global require*/

var
    // Libraries
    /** @typedef {http.Server} */
    http = require('http'),
    log = console.log,

    // Configuration
    configHost = '127.0.0.1',
    configPort = 8080;

try {
    log('Server starting..');
    http
        .createServer()
        .listen(configPort, configHost)
        .on('listening', function(request, response) {
            log('Server listening on [', configHost, '] port [', configPort, ']');
        })
        .on('error', function(error) {
            log('Server error.', error);
        })
        .on('close', function() {
            log('Server shutdown.');
        })
        .on('request', function(request, response) {
            log(
                '[%s] Http request "%s %s" "%s"',
                (new Date).toUTCString(),
                request.method,
                request.url,
                request.headers['user-agent']
            );

            response.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            response.end('Hello, world of Node.js');
        });

} catch (exception) {
    log('Fatal error:', exception);
}
