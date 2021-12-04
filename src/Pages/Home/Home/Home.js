import React from 'react';
import Contact from '../Contact/Contact';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Navigation from '../Header/Navigation/Navigation';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Services />
            {/* <AboutUs /> */}
            <Feedback />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;