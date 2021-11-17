const { fetchBreedDescription } = require('./breedFetcher');
// const breedName = process.argv[2];

fetchBreedDescription('Bombay', (err, description) => {
  if(err){
    console.log('Error Fetch Details', err)
    console.log('Status code:', description)
  } else {
    console.log(description)
  }
})


