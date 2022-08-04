import React from "react";
import { Box } from "@mui/material";
import notFound from '../assets/notfound.png';

export const NotFound = () => {
    return(
        <>
        <Box>
            <img src={notFound} alt='notfound'></img>
        </Box>
        </>
    )
}