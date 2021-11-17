const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const breedCode = breedName.slice(0, 4); //Variable for 3 letter search code for API query

  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedCode}`,
    (err, response, body) => {
      if (err) {
        callback(err, response.statusCode);
      }
      const data = JSON.parse(body);
      if (data[0]) {
        callback(null, data[0].description);
      } else {
        callback(null, `${breedName} cat not found`);
      }
    }
  );
};

module.exports = { fetchBreedDescription };