import React from 'react';
import { Container, Box } from '@mui/material';
import graylingFish from '../images/freepik__upload__71371.jpeg';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
            <Box sx={{width: "100%", textAlign: "center", fontWeight: "normal",color: "a8b0b4", backgroundColor: 'white'}}>
                &copy; {currentYear} Grayling    
                <img alt="Grayling ABI LLC" src={graylingFish} style={{width: '50px', height: "auto", paddingTop: "4px"}}></img>
                Business-Intel LLC  
            </Box>

    );
};

export default Footer;