import React from "react";
import { Box, Card, CardMedia, Typography } from '@mui/material';



export const CardNews = (props) => {
    return (
        <Card sx={{margin: '5px', border: '2px', maxWidth: 360}}>
            <Box>
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
        </Card>
    )
}

// export default function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
