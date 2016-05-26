const Hapi = require('hapi');
var hobbiesHandler = require('./node_components/RESTHandlers/hobbiesHandler')
var experienceHandler = require('./node_components/RESTHandlers/experienceHandler')

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
        console.log("Query for the request");
        console.log(request.query);
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
/* /experience get and post routes */
//1. get (select )all experience
server.route({
    method: 'GET',
    path: '/experience',
    handler: function (request, reply) {

        new experienceHandler().getExperience(function (err, data) {
            if (err) {
                return reply("Data not found");
                console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});

//2. Post (insert) new company in experience
server.route({
    method: 'POST',
    path: '/experience',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);

        new experienceHandler().postExperience(query,function (err, data) {
            if (err) {
                return reply("Data not found");
                console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});

//3. PUT (update) new company in experience
server.route({
    method: 'PUT',
    path: '/experience',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);

        new experienceHandler().updateExperience(query,function (err, data) {
            if (err) {
                return reply("Data not found");
                console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});

//4. DELETE (Delete) a company in experience
server.route({
    method: 'DELETE',
    path: '/experience',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log( request.query);
        var query={};
        query['postData']=request.query;

        new experienceHandler().deleteExperience(query,function (err, data) {
            if (err) {
                return reply("Data not found");
                console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
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
