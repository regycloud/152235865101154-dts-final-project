const axios = require("axios");

const tlma = axios.create(
    {
      method: 'GET',
      baseURL: 'https://the-lazy-media-api.vercel.app/'
    }
) 

export default tlma;