var request = require ("request");


module.exports = {
    //pull species information from catalogue of life api using the species searched by user, then grab the genus and make another api call to get other species
    lifesearch: function(req, res) {
        console.log(req.query.species);
        request('http://webservice.catalogueoflife.org/col/webservice?name=' + req.query.species + '&format=json&response=full', function (error, response, body) {
            if(error){  
              console.log('statusCode:', response && response.statusCode);
              console.log('error:', error);
            }
            else {
              parsedBody = JSON.parse(body);
              if(parsedBody.results[0].name_status==="common name") {
                genus = parsedBody.results[0].accepted_name.genus;
              } else {
                genus = parsedBody.results[0].genus;
              }
              request('http://webservice.catalogueoflife.org/col/webservice?name=' + genus + '&format=json&response=full', function (error, response, genusBody) {
                  
                console.log('statusCode:', response && response.statusCode);
                  if(error){  
                    console.log('error:', error);
                  }
                  else {
                    parsedGenusBody = JSON.parse(genusBody);
                    var tree={
                      "name": parsedGenusBody.results[0].classification[0].name,
                      "children" : [{
                        "name" : parsedGenusBody.results[0].classification[1].name,
                        "children" : [{
                          "name" : parsedGenusBody.results[0].classification[2].name,
                          "children" : [{
                            "name" : parsedGenusBody.results[0].classification[3].name,
                            "children" : [{
                              "name" : parsedGenusBody.results[0].classification[4].name,
                              "children" : [{
                                "name" : parsedGenusBody.results[0].name,
                                "children" : [{
                                }]
                              }]
                            }]
                          }]
                        }]
                      }]
                    };
                    console.log({tree:tree, body:parsedBody});
                    res.json({tree:tree, body:parsedBody});
                  }
              });
            }
        });
    },

    //would like to pull genusSearch out of lifesearch function to make more readable. method below not yet functional
    genusSearch: function(genus) {
      request('http://webservice.catalogueoflife.org/col/webservice?name=' + genus + '&format=json&response=full', function (error, response, genusBody) {
          
        console.log('statusCode:', response && response.statusCode);
          if(error){  
            console.log('error:', error);
          }
          else {
            console.log('body:', genusBody);
            // res.json(JSON.parse(body));
          }
      });
    },
}