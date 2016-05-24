const Hapi = require('hapi');
var hobbiesHandler = require('./node_components/RESTHandlers/hobbiesHandler')
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000,
    routes: {cors: true}
});

// Add the route
server.route({
    method: 'POST',
    path: '/saveHobby',
    handler: function (request, reply) {
        new hobbiesHandler().postHobby();
        return reply('hello world');
    }
});

server.route({
    method: 'GET',
    path: '/getHobby',
    handler: function (request, reply) {
        new hobbiesHandler().getHobby(function (err, data) {
            if (err) {
                return reply("Data not found");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});


// Start the server
server.start(function (err) {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
