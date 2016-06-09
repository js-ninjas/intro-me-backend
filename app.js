const Hapi = require('hapi');
var hobbiesHandler = require('./node_components/RESTHandlers/hobbiesHandler');
var experienceHandler = require('./node_components/RESTHandlers/experienceHandler');
var educationHandler = require('./node_components/RESTHandlers/educationHandler');
var achievementHandler = require('./node_components/RESTHandlers/achievementHandler');
var photosHandler = require('./node_components/RESTHandlers/photosHandler');
var profileHandler = require('./node_components/RESTHandlers/profileHandler');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000,
    routes: {cors: true}
});

/* /hobbies get and post PUT DLETE routes */
//1. get (select )all Hobby
server.route({
    method: 'GET',
    path: '/hobbies',
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
//2. Post (insert) save hobbies details
server.route({
    method: 'POST',
    path: '/hobbies',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=request.payload;//JSON.parse(request.payload);

        new hobbiesHandler().postHobby(query,function (err, data) {
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

//3. PUT (update) hobbies details
server.route({
    method: 'PUT',
    path: '/hobbies',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};

        query['postData']=JSON.parse(request.payload);// CONVERTING TO JSON OBJECT 
        query['query']=request.query;

        new hobbiesHandler().updateHobby(query,function (err, data) {
            if (err) {
                return reply("Data not found");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});

//4. DELETE (Delete) delete hobbies
server.route({
    method: 'DELETE',
    path: '/hobbies',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(request.query);
        var query={};
        //query['postData']=request.query;
        query['query']=request.query;
        console.log(query['postData']);

        new hobbiesHandler().deleteHobby(query,function (err, data) {
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
        console.log("Recived Data Type")
        console.log(typeof request.payload)
        console.log("DATATTATAT Complete")
        var query={};
        query['postData']=request.payload;
        console.log(query['postData']);

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
        
        var query={};
        delete request.payload['_id'];
        query['postData']=JSON.parse(request.payload);
        query['query']=request.query;
        console.log("DATATTATAT  putTTTTTTT ")
        console.log( request.query);
        console.log(typeof request.payload);

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
        console.log(request.query);
        var query={};
        //query['postData']=request.query;
        query['query']=request.query;

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

/* /Education get, PUT, DELETE and post routes */
//1. get (select )all education details
server.route({
    method: 'GET',
    path: '/education',
    handler: function (request, reply) {

        new educationHandler().getEducation(function (err, data) {
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

//2. Post (insert) save education details
server.route({
    method: 'POST',
    path: '/education',
    handler: function (request, reply) {
        console.log("DATATTATAT EDUCATION")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);

        new educationHandler().postEducation(query,function (err, data) {
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

//3. PUT (update) education details
server.route({
    method: 'PUT',
    path: '/education',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(request.query);
        var query={};
        query['postData']=JSON.parse(request.payload);
        query['query']=request.query;

        new educationHandler().updateEducation(query,function (err, data) {
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

//4. DELETE (Delete) delete education
/*  DELETE FUCTION IS NOT REQUIRED  FRO EDUCATIONAL DETAILS*/
/*server.route({
    method: 'DELETE',
    path: '/education',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        //console.log( request.query);
        var query={};
        query['postData']=request.query;
        console.log(query['postData']);

        new educationHandler().deleteEducation(query,function (err, data) {
            if (err) {
                return reply("Data not found");
                console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});*/



/*Achievement Handler  get, PUT, DELETE and post routes*/

//1. get (select )all achievementachievement details
server.route({
    method: 'GET',
    path: '/achievements',
    handler: function (request, reply) {

        new achievementHandler().getAchievement(function (err, data) {
            if (err) {
                return reply("Data not found");
                // console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});

//2. Post (insert) save achievement details
server.route({
    method: 'POST',
    path: '/achievements',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);

        new achievementHandler().postAchievement(query,function (err, data) {
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

//3. PUT (update) achievement details
server.route({
    method: 'PUT',
    path: '/achievements',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);
        query['query']=request.query;

        new achievementHandler().updateAchievement(query,function (err, data) {
            if (err) {
                return reply("Data not found");
                //console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});

//4. DELETE (Delete) delete achievement
server.route({
    method: 'DELETE',
    path: '/achievements',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        //console.log( request.query);
        var query={};
        query['postData']=request.query;
        console.log(query['postData']);

        new achievementHandler().deleteAchievement(query,function (err, data) {
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

/*Potos Handler  get, PUT, DELETE and post routes*/

//1. get (select )all Potos details
server.route({
    method: 'GET',
    path: '/potos',
    handler: function (request, reply) {

        new photosHandler().getPhoto(function (err, data) {
            if (err) {
                return reply("Data not found");
                // console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});

//2. Post (insert) save Potos details
server.route({
    method: 'POST',
    path: '/potos',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);

        new photosHandler().postPhoto(query,function (err, data) {
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

//3. PUT (update) Potos
server.route({
    method: 'PUT',
    path: '/potos',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);

        new photosHandler().updatePhoto(query,function (err, data) {
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

//4. DELETE (Delete) delete Potos
server.route({
    method: 'DELETE',
    path: '/potos',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        //console.log( request.query);
        var query={};
        query['postData']=request.query;
        console.log(query['postData']);

        new photosHandler().deletePhoto(query,function (err, data) {
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

/*Profile  Handler  get, PUT, DELETE and post routes*/

//1. get (select )all profile details
server.route({
    method: 'GET',
    path: '/profile',
    handler: function (request, reply) {

        new profileHandler().getProfile(function (err, data) {
            if (err) {
                return reply("Data not found");
                // console.log("sajdlsjddsajdkasjdlajsldjasldjlsaj$#####");
            }
            else { // return the result
                return reply(JSON.stringify(data));
            }
        });

    }
});

//2. Post (insert) save profile details
server.route({
    method: 'POST',
    path: '/profile',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);

        new profileHandler().postProfile(query,function (err, data) {
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

//3. PUT (update) profile
server.route({
    method: 'PUT',
    path: '/profile',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        console.log(typeof request.payload)
        var query={};
        query['postData']=JSON.parse(request.payload);

        new profileHandler().updateProfile(query,function (err, data) {
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

//4. DELETE (Delete) delete profile
server.route({
    method: 'DELETE',
    path: '/profile',
    handler: function (request, reply) {
        console.log("DATATTATAT")
        //console.log( request.query);
        var query={};
        query['postData']=request.query;
        console.log(query['postData']);

        new profileHandler().deleteProfile(query,function (err, data) {
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
