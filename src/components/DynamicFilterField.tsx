import React from 'react';
import { TextField } from '@mui/material';
import FilterFieldProps from '../types/filterFieldProps';
import { IFilterValues } from '../interfaces/IFilterValues';
import UpArrowImage from '../images/caret-up.png';
import DownArrowImage from '../images/caret-down.png';

const DynamicFilterField: React.FC<FilterFieldProps> = ({ id, value, handleFilterValueChange, handleSortValueChange}) => {

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
                <div style={{float: 'left'}}> 
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
                <div style={{float: 'left', width: '15px'}}>
                    <img 
                        src={UpArrowImage} 
                        alt="Sort Asc" 
                        className="hoverSortAsc" // Adjust the size and margin as needed
                        onClick={() => handleSortValueChange(id, "")}
                    />
                   <img 
                        src={DownArrowImage} 
                        alt="Sort Desc" 
                        className="hoverSortDesc" 
                        onClick={() => handleSortValueChange(id, "_d")}
                    />
                </div>

            </div>            
    );
};
export default DynamicFilterField;
