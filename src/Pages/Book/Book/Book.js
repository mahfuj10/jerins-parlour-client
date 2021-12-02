import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import BookingDrawer from '../BookingDrawer/BookingDrawer';
import Navigation from '../../Home/Header/Navigation/Navigation';


const Book = () => {

    return (

        <>
<Navigation />
<BookingDrawer />


        </>
       
    );
};

export default Book;