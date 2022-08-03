import React, {useState, useEffect} from "react";
import newsApi from "../api/news";
import { Typography, Box } from "@mui/material";
import { CardNews } from "../components/CardNews";

export const HomePage = () => {
    const [News, setNews] = useState([]);
    const [NewsUS, setNewsUS] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await newsApi.get(
                    "/top-headlines?country=id"
                );
                if (response.data.articles.map((eachNs) => (eachNs.urlToImage)) !== null) {
                    setNews(response.data.articles);
                }

            } catch(err) {
                console.log(err)
            }
        };
        fetchNews();
    }, []);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await newsApi.get(
                    "/top-headlines?country=us"
                );
                if (response.data.articles.map((eachNs) => (eachNs.urlToImage)) !== null) {
                    setNewsUS(response.data.articles);
                }

            } catch(err) {
                console.log(err)
            }
        };
        fetchNews();
    }, []);

    return(
        <Box>
            <Typography variant="h3">Recent News from Indonesia</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", paddingBottom: '10px'}}>
            {News.slice(0, 4).map((eachNews) => {console.log(News)
                return <CardNews news={eachNews} key={eachNews.title} />
            })}
            </Box>

            <Typography variant="h3">Recent News from United States</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", paddingBottom: '10px'}}>
            {NewsUS.slice(0, 4).map((eachNews) => {console.log(News)
                return <CardNews news={eachNews} key={eachNews.title} />
            })}
            </Box>
        </Box>
    )
}