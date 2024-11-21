import React from 'react';
import '../styles/bulma.css';
import Header from '../components/Header';
import Data from '../components/Data';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <Data />
            <Footer />       
        </div>
    );
};

export default HomePage;