import React, { useState } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import { Box } from '@mui/material';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import Services from '../Services/Services/Services';
import { ThemeProvider, useTheme, createTheme, createMuiTheme } from '@mui/material/styles';
import ToggleColorMode from '../../DarkMode/DarkMode';


const Home = () => {

    // const [darkMode, setDarkMode] = useState(true);
    const theme = createMuiTheme({
        palettle: {
            type: "dark"
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Navigation />
            <Header />
            <ToggleColorMode />
            <Services />
            <AboutUs />
            <Feedback />
            <Contact />
            <Footer />
        </ThemeProvider>
    );
};

export default Home;