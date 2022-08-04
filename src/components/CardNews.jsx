import React from "react";
import { Box, Card, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";



export const CardNews = (props) => {
    const newKey = props.news.key.replace(/[/]/g, '.');
    return (
        <Card sx={{margin: '5px', border: '2px', maxWidth: 360}}>
            <Link to={`/Detail/${newKey}`}>
            <Box sx={{padding: '10px 10px'}}>
                <Typography>
                    {props.news.title}
                </Typography>
                <CardMedia
                component="img"
                image={`${props.news.thumb}`}
                alt={`${props.news.title}`}
                >
                </CardMedia>
            </Box>
            </Link>
        </Card>
    )
}

