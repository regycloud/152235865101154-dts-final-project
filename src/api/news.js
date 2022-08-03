import axios from "axios";

const newsApi = axios.create({
    baseURL:  "https://newsapi.org/v2/",
    params: {
        apiKey: "23976e71a929490097156a4572d478c6"
    },
});

export default newsApi;