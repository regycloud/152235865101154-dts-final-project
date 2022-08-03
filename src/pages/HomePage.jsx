import React, {useState, useEffect} from "react";
import tlma from "../api/tlma";
import { Typography, Box } from "@mui/material";
import { CardNews } from "../components/CardNews";

export const HomePage = () => {
    const [News, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await tlma.get(
                    "/api/games?page=1"
                );
                setNews(response.data);

            } catch(err) {
                console.log(err)
            }
        };
        fetchNews();
    }, []);


    return(
        <Box>
            <Typography variant="h3">Recent News from United States</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", paddingBottom: '10px'}}>
            {News.map((eachNews) => {
                return <CardNews news={eachNews} key={eachNews.key} />
            })}
            </Box>
        </Box>
    )
}