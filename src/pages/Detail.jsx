import tlma from "../api/tlma";
import loading from "../assets/loading.gif"

import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

export const DetailNews = (props) => {

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {NewsID} = useParams();


  useEffect(() => {
    // const NewsID = params.NewsID.replace(/[.]/,'/');

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await tlma.get(
          '/api/detail/'+`${NewsID}`.replace(/[.]/g,'/')
        );
        setNews(response.data);

        setIsLoading(false)

      } catch(err) {
        console.log(err);
      }
    };
    fetchData();
  }, [NewsID]);

  console.log(news)
  
  if (isLoading) {
    return (
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Box sx={{paddingTop: '2em'}}>
                <img src={loading} alt='loading animation' />
                </Box>
                <Typography sx={{paddingBottom: '2vh', minHeight: '70vh'}} >
                Loading... 
                </Typography>
            </Box>
    )
  }
    return (
  
      <Card sx={{ borderRadius: 0, background: 'white', minHeight:'90vh', paddingTop: '10vh', paddingBottom: '5vh'}}>
          <Box sx={{ display: "grid", margin: 'auto'}}>
            <Box className="boxy" sx={{ width: "100%", textAlign: "left"}}>
              <Typography variant="h3" sx={{ textAlign: "center", paddingBottom: '1em', margin: '0 3em'}}>
                {news.results?.title}
              </Typography>
              <CardMedia
                component="img"
                image={news.results?.content[0]}
                alt={news.results?.title}
                sx={{borderRadius: 10, maxWidth: '50%', marginLeft: 'auto', marginRight: 'auto'}}
              />
              <br />
              <Box sx={{paddingLeft: '30vh', paddingRight: '30vh'}}>
              <Typography>Date : {news.results?.date}</Typography>
              <Typography sx={{fontStyle:"italic"}}> {news.tagline}</Typography>
              <Typography>Author : {news.results?.author}</Typography>
              <br />
              <Typography>
                {news.results?.content.slice(1, news.length).map((text) => text[0] !== 'h' ? text: '' )}
                </Typography>

              </Box>
            </Box>
        </Box>
      </Card>
    )
  }