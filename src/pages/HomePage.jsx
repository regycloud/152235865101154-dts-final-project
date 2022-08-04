import React, {useState, useEffect} from "react";
import tlma from "../api/tlma";
import { Typography, Box } from "@mui/material";
import { CardNews } from "../components/CardNews";
import loading from '../assets/loading.gif';


export const HomePage = () => {
    const [News, setNews] = useState([]);
    const [NewsTech, setNewsTech] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    

    useEffect(() => {
        setIsLoading(true);
        const fetchNews = async () => {
            try {
                const response = await tlma.get(
                    "/api/games?page=1"
                );

                setNews(response.data);
                setIsLoading(false);

            } catch(err) {
                console.log(err)
            }
        };
        fetchNews();
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const fetchNews = async () => {
            try {
                const response = await tlma.get(
                    "/api/tech?page=1"
                );
                setNewsTech(response.data);
                setIsLoading(false);

            } catch(err) {
                console.log(err)
            }
        };
        fetchNews();
    }, []);
    


    return(
        <>
            {isLoading ? 
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Box sx={{paddingTop: '2em'}}>
                <img src={loading} alt='loading animation' />
                </Box>
                <Typography sx={{paddingBottom: '2vh', minHeight: '70vh'}} >
                Loading... 
                </Typography>
            </Box> : 

        <Box>
            <Typography variant="h3" sx={{padding: '1em 1em'}}>Gaming Corner</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", paddingBottom: '10px'}}>
            {News.slice(0, News.length - 2).map((eachNews) => {
                return <CardNews news={eachNews} key={eachNews.key} />
            })}
            </Box>
            <Typography variant="h3" sx={{padding: '1em 1em'}}>Tech News</Typography>
            <Box sx={{display: 'grid', gridTemplateColumns: "repeat(4, 1fr)", paddingBottom: '10px'}}>
            {NewsTech.slice(0, NewsTech.length - 2).map((eachNews) => {
                return <CardNews news={eachNews} key={eachNews.key} />
            })}
            </Box>

        </Box>
        }
        </>
    )
}