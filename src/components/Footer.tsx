import React from 'react';
import '../styles/bulma.css';
import { useGlobalState } from '../contexts/GlobalStateContext';

const Footer: React.FC = () => {
    const {globalArray} = useGlobalState();
    console.log('in footer');
    globalArray.forEach((item) => {
      if(item != null)
        console.log('globalArray Values: ',item);
      else
        console.log('globalArray value = null');
    });
    console.log('globalArray: ',globalArray.length.toString());
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