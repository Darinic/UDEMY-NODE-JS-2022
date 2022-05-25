const axios = require('axios');

axios.get('https://www.wikipedia.org')
.then(resp => {
    console.log(resp)
})
.catch(error => {
    console.log(error)
})
.then(() => {
    console.log('All done!');
});