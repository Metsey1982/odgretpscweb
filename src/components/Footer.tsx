import React from 'react';
import '../styles/bulma.css';
import { useGlobalState } from '../contexts/GlobalStateContext';

const Footer: React.FC = () => {
    const {globalArray} = useGlobalState();
    return (
        <div>
            <h1>Footer Component - will contain footer components and or messages</h1>
            <div>
              <h2>Global Items</h2>
              <ul>
                
                {globalArray.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
        </div>
    );
};

export default Footer;