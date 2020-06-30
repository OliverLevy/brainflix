//const url = "https://project-2-api.herokuapp.com/videos";
//const api_key = "?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8";
//const defaultId = "/1af0jruup5gu";

const axios = require('axios');
const fs = require('fs');

axios.get('https://project-2-api.herokuapp.com/videos?api_key=2198d2ef-b132-4f64-accc-f82f4168c9a8')
.then(suc => {
  console.log(suc)
  fs.writeFile(
    "./data/videos-list.json", 
    JSON.stringify(suc.data, null, 2), 
    (err) => console.log(err))
})