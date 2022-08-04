import tlma from "../api/tlma";

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
      <Box> <Typography> Please Wait...</Typography></Box>
    )
  }
    return (
  
      <Card sx={{ borderRadius: 0, background: 'white', minHeight:'90vh', paddingTop: '10vh'}}>
        <Box className="boxy" sx={{ padding: '2em' }}>
          <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", margin: 'auto', width: '70em' }}>
            <Box className="boxy" sx={{ width: "18em", paddingLeft: 15 }}>
            {news.results.title ? 'null' : 'nell'}
              <CardMedia
                component="img"
                image={''}
                alt={news.results}
                sx={{borderRadius: 10}}
              />
            </Box>
  
            <Box className="boxy" sx={{ width: "100%", textAlign: "left", marginLeft: '-3em' }}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                {news.title}
              </Typography>
              <br />
              <Typography>Date : {news.time}</Typography>
              <Typography sx={{fontStyle:"italic"}}> {news.tagline}</Typography>
              <br />
              <Typography>Overview : {news.desc}</Typography>
              <br />
              <Typography>Trailer: </Typography>
              <div style={{border:3}}>
      <iframe
        width="480"
        height="320"
        src={`https://www.youtube.com/embed/RtRiWBSqTgQ`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="video"
      />
    </div>
            </Box>
          </Box>
        </Box>
      </Card>
    )
  }