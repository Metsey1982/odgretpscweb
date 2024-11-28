import React, {useState} from 'react';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { TextField } from '@mui/material';
import { IFilterValues } from '../interfaces/IFilterValues';


const AddFilterField: React.FC<{ id: string, name: string }> = ({ id, name}) => {
    const {addItemToGlobalArray} = useGlobalState();
    const [businessTypeFieldValue, setBusinessTypeFieldValue] = useState<string>("");
    const [filterValues] = useState<IFilterValues>({
        businesstype: '',
        // Add other filter values as needed
      });

    const handleAddFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        console.log('In handleAddFilter - id: ', id, ' name: ', name, ' value: ', value);
        
        addItemToGlobalArray(name + "_" + value.replace(name + "_",""));
        setBusinessTypeFieldValue("");
    };
 
    return (
            <div> 
                <TextField 
                    style={{width: "100px", float: "left"}}
                    id={id} 
                    size="small" 
                    fullWidth={false}
                    type="text"
                    value={businessTypeFieldValue}                    
                    onChange={handleAddFilter}
                    label={name}
                    placeholder="filter value"
                />  
            </div>             
    );
};

const TextFieldContainer: React.FC = () => {
    //const names = ['loanrange', 'businessname', 'address', 'city', 'state', 'zip', 'naicscode', 'businesstype', 'raceethnicity', 'gender', 'veteran', 'jobsretained', 'dateapproved', 'lender', 'cd'];
    const names = ['businesstype'];

    return (
        <div>
            {names.map((name, index) => (
                <AddFilterField key={index} id={`textfield-${index}`} name={name}/>
            ))}
        </div>
    );
};

export default TextFieldContainer;