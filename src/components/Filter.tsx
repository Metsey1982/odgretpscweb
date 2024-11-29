import React from 'react';
import '../styles/bulma.css';
import { TextField, Button } from '@mui/material';
import { IFilterTextFieldsProps } from '../interfaces/IFilterTextFieldProps';
import AddFilterField from './AddFilterComponent';
import { useGlobalState } from '../contexts/GlobalStateContext';

const FilterTextFields: React.FC<IFilterTextFieldsProps> = ({ filterValues}) =>
    {
        const {setGlobalArray} = useGlobalState();
        const handleClearFilterButtononClick = () => {
            filterValues.businesstype = "";
            console.log('filterValues.businesstype after clear: ',filterValues.businesstype);
            const emptyTheGlobalArray: string[] = [];
            setGlobalArray(emptyTheGlobalArray);
            console.log('After Empty Array: ',emptyTheGlobalArray.length);
            //clear the filter field
        };
        return (
            
            <div style={{width: "100%"}}>
                 <Button id="2" onClick={handleClearFilterButtononClick} variant="outlined" style={{width: "100px", float: "left"}}>Clear</Button>    
                 <div style={{width: "150px", float: "left"}}>
                     <TextField sx={{input: {color: 'gray'}}} label="Loan Range" id="outlined-size-small" placeholder="filter value" size="small" fullWidth={false}/>
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
                 <AddFilterField/>
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
export default FilterTextFields;

