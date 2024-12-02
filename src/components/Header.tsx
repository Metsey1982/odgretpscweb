import React from 'react';
import '../styles/bulma.css';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { useGlobalSortState } from '../contexts/GlobalStateSortContext';

const Header: React.FC = () => {
    const {globalArray} = useGlobalState();
    const {globalSortArray} = useGlobalSortState();
    return (
        <div>
            <h1 className="title is-5"> PPP Loans Provided for New Jersey Businesses</h1>
            <h3 className="title is-6"> POC Project Written in React By Mark Turanin</h3>
            <div className="title is-6" style={{width: "50px", float: "left"}}>Filters:</div>
            <div style={{width: "90%", float:"left"}}>
            {globalArray.map((item, index) => (
                   <div style={{float: "left"}} key={index}>{item.replace("_","=")}&</div>
                ))}
            </div>
            <div className="title is-6" style={{width: "50px", float: "none"}}>Order By:</div>
            <div style={{width: "90%", float:"none"}}>
            {globalSortArray.map((item, index) => (
                   <div style={{float: "left"}} key={index}>{item}&</div>
                ))}
            </div>
        </div>
    );
};

export default Header;