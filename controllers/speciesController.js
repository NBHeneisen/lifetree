var request = require ("request");


module.exports = {

    lifesearch: function(req, res) {
        console.log(req.query.species);
        request('http://webservice.catalogueoflife.org/col/webservice?name=' + req.query.species + '&format=json&response=full', function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            res.json(JSON.parse(body));
        });
    }
}