import React from 'react';
import { TextField } from '@mui/material';
import { useGlobalIdState } from '../contexts/GlobalStateIdContext';

const AddFilterField: React.FC<{ id: string, name: string }> = ({ id, name}) => {
    const {addItemToGlobalIdArray} = useGlobalIdState();

    const handleAddFilterToStage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        console.log('In handleAddFilter - id: ', id, ' name: ', name, ' value: ', value);
        
        addItemToGlobalIdArray(name + "_" + value.replace(name + "_",""));
    };
    const filterTBWidth = (name: string): string => {
        switch (name) {
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
                    style={{width: filterTBWidth(name), float: "left"}}
                    id={id} 
                    size="small" 
                    fullWidth={false}
                    type="text"
                    //value={businessTypeFieldValue}                    
                    onChange={handleAddFilterToStage}
                    label={name}
                    //placeholder="filter value"
                />  
            </div>             
    );
};

const TextFieldContainer: React.FC = () => {

    const names = ['loanrange','businessname','address','city','state','zip','naicscode','businesstype','raceethinicity','gender','veteran','jobsretained','dateapproved','lender','cd'];

    return (
        <div>
            {names.map((name, index) => (
                <AddFilterField key={index} id={`${name}-${index}`} name={name}/>
            ))}
        </div>
    );
};

export default TextFieldContainer;