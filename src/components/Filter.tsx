import React, {useState, useEffect, forwardRef, useRef, useImperativeHandle} from 'react';
import '../styles/bulma.css';
import {TextField, Container, } from '@mui/material';
import '../styles/bulma.css';
import Button from '@mui/material/Button';

export const FilterTextFields = forwardRef((_, ref) =>
    {
        // Create a map to store references to each TextField
        const filterFieldRefs = React.useRef<Map<string, HTMLInputElement>>(new Map());
    
        // Use a state to manage TextField values if needed
        const [values, setValues] = React.useState({businesstype: ''});
        // Handle changes to update values
        const handleFilterChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValues({
            ...values,
            [name]: event.target.value,
            });
        };
        const applyFilterModel = () => {
            console.log('In child function applyFilterModel');
            filterFieldRefs.current.forEach((ref, key) => {
                if (ref) {
                    console.log(`Value of ${key}:`, ref.value);
                    // Access other properties as needed
                }
            });
        };
        useImperativeHandle(ref, () => ({
            applyFilterModel,
        }));
       // Use useEffect to access properties after component mounts
       useEffect(() => {
            filterFieldRefs.current.forEach((ref, key) => {
                if (ref) {
                    console.log(`Value of ${key}:`, ref.value);
                    // Access other properties as needed
                }
            });
        }, [values]);

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
                     <TextField inputRef={(el) => el && filterFieldRefs.current.set('businesstype', el)} onChange={handleFilterChange('businesstype')} value={values.businesstype} sx={{input: {color: 'gray'}}} label="Business Type" id="outlined-size-small" placeholder="filter value" size="small" fullWidth={false}/>
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
    })


