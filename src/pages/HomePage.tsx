import React from 'react';
import '../styles/bulma.css';
import Header from '../components/Header';
import Data from '../components/Data';
import Footer from '../components/Footer';
import { Stack } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <Stack>
            <Header />
            <Data />
            <Footer /> 
        </Stack>      
     );
};

export default HomePage;