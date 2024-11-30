import React from 'react';
import { TextField } from '@mui/material';
import { useGlobalShadowState } from '../contexts/GlobalStateShadowContext';
import FilterFieldProps from '../types/filterFieldProps';
import { IFilterValues } from '../interfaces/IFilterValues';

const DynamicFilterField: React.FC<FilterFieldProps> = ({ id, value, handleFilterValueChange}) => {

    const filterTBWidth = (Id: keyof IFilterValues): string => {
        switch (Id) {
            case 'loanrange':
                return '150px';
            case 'businessname':
                return '150px';            
            case 'address':
                return '150px';
            case 'city':
                return '150px'; 
            case 'lender':
                return '150px';            
            default:
                return '100px'; 
            }
        };

    return (
            <div> 
                <TextField 
                    style={{width: filterTBWidth(id), float: "left"}}
                    id={id as string} 
                    size="small" 
                    fullWidth={false}
                    type="text"
                    value={value}                   
                    onChange={(e) => handleFilterValueChange(id, e.target.value)}
                    label={id}
                    //placeholder="filter value"
                />  
            </div>             
    );
};
export default DynamicFilterField;
