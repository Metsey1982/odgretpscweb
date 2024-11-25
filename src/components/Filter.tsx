import React, {useState, useEffect} from 'react';
import '../styles/bulma.css';
import {TextField, Container, } from '@mui/material';
import { SimpleTreeView,TreeItem} from '@mui/x-tree-view';

import '../styles/bulma.css';

const Filter: React.FC = () => {
    return (

            <div style={{width: "100%"}}>
                <div style={{width: "150px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Loan Range" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "150px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Business Name" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "150px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Street Address" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "150px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="City" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="State" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Zipcode" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="NACIS Code" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Business Type" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Race Ethnicity" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Gender" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Veteran" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Jobs Retained" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Date Approved" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "150px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Lender" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>
                <div style={{width: "100px", float: "left"}}>
                    <TextField sx={{input: {color: 'gray'}}} label="Congressional District" id="outlined-size-small" defaultValue="filter value" size="small" fullWidth={false}/>
                </div>


            </div>

    );
};

export default Filter;