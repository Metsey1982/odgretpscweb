import React from 'react';
import '../styles/bulma.css';
import { useGlobalState } from '../contexts/GlobalStateContext';

const Header: React.FC = () => {
    const {globalArray} = useGlobalState();
    return (
        <div>
            <h1 className="title is-5"> PPP Loans Provided for New Jersey Businesses</h1>
            <h3 className="title is-6"> POC Project Written in React By Mark Turanin</h3>
            <div style={{width: "100px", float: "left"}}>Filters:</div>
            {globalArray.map((item, index) => (
                   <div style={{width: "200px", float: "left"}} key={index}>{item.replace("_","=")}&</div>
                ))}
        </div>
    );
};

export default Header;