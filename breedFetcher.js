const request = require('request');
const breedName = process.argv[2];
const breedCode = breedName.slice(0,4); //Variable for 3 letter search code for API query

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedCode}`, (err, response, body) => {
  if (err) throw err;
  console.log('status code: ', response && response.statusCode);
  const data = JSON.parse(body);
  if (data[0]) {
    console.log(data[0].description);
  } else console.log(`Uh Oh! ${breedName} cat not found.`);
});
