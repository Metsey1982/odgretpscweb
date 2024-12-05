import React, {useContext} from 'react';
import { TextField } from '@mui/material';
import FilterFieldProps from '../types/filterFieldProps';
import { IFilterValues } from '../interfaces/IFilterValues';
import UpArrowImage from '../images/caret-up.png';
import DownArrowImage from '../images/caret-down.png';
import {GlobalSortComponentAscContext} from '../contexts/GlobalStateSortControlAscContext'
import {GlobalSortComponentDescContext} from '../contexts/GlobalStateSortControlDescContext'

const DynamicFilterField: React.FC<FilterFieldProps> = ({ id, value, handleFilterValueChange, setSortValueArray}) => {
    const sortControlAscContext = useContext(GlobalSortComponentAscContext);
    if(!sortControlAscContext){
        throw new Error('GlobalSortComponentAscContext must be used within a GlobalSortComponentAscProvider');
    }
    const { sortControlAscComponents, setSortControlAscComponent } = sortControlAscContext;
    
    const sortControlDescContext = useContext(GlobalSortComponentDescContext);
    if(!sortControlDescContext){
        throw new Error('GlobalSortComponentDescContext must be used within a GlobalSortComponentDescProvider');
    }
    const { sortControlDescComponents, setSortControlDescComponent } = sortControlDescContext;

    const handleSortValueChange = (Id: keyof IFilterValues, sortdirection: string)  => {
        // Logic to change color based on current color
        setSortValueArray(Id,sortdirection);
        if(sortdirection === "")
            setSortControlAscComponent(Id);
        else
            setSortControlDescComponent(Id);
    };
   
    const filterTBWidth = (Id: keyof IFilterValues): string => {
        switch (Id) {
            case 'loanrange':
                return '135px';
            case 'businessname':
                return '135px';            
            case 'address':
                return '135px';
            case 'city':
                return '135px'; 
            case 'lender':
                return '135px';            
            default:
                return '85px'; 
            }
        };

    const componentClassAscName = sortControlAscComponents.find(component => component.id === id)?.classNameValue || ''; 
    const componentClassDescName = sortControlDescComponents.find(component => component.id === id)?.classNameValue || ''; 

    return (
            <div>
                <div style={{float: 'left', paddingTop: '5px'}}> 
                    <TextField 
                        sx={{width: filterTBWidth(id), float: "left",'& .MuiOutlinedInput-input': {
                            fontSize: '14px' // Adjust the font size as needed
                        }
                    }}
                id={id as string} 
                        size="small"
                        variant="outlined"
                        fullWidth={false}
                        type="text"
                        value={value}                   
                        onChange={(e) => handleFilterValueChange(id, e.target.value)}
                        label={id}
                        placeholder="filter value"
                    /> 
    
                </div> 
                <div style={{float: 'left', width: '15px'}}>
                    <img 
                        src={UpArrowImage} 
                        alt="Sort Asc" 
                        className={componentClassAscName} 
                        onClick={() => handleSortValueChange(id, "")}
                    />
                   <img 
                        src={DownArrowImage} 
                        alt="Sort Desc" 
                        className={componentClassDescName}  
                        onClick={() => handleSortValueChange(id, "_d")}
                    />{componentClassDescName}
                </div>

            </div>            
    );
};
export default DynamicFilterField;
