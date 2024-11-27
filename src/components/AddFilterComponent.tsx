import React, {useState} from 'react';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { TextField } from '@mui/material';

const AddFilterField: React.FC<{ id: string, name: string }> = ({ id, name}) => {
    const {addItemToGlobalArray} = useGlobalState();
    const [holdFilter, setHoldFilter] = useState<string>('');

    const handleAddFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        console.log('In handleAddFilter - id: ', id, ' name: ', name, ' value: ', value);
        
        setHoldFilter(name + "_" + value.replace(name + "_",""));
        addItemToGlobalArray(name + "_" + value.replace(name + "_",""));
    };

    return (
            <div>     
                <TextField 
                    style={{width: "100px", float: "left"}}
                    id={id} 
                    size="small" 
                    fullWidth={false}
                    type="text"
                    value={holdFilter}
                    onChange={handleAddFilter}
                    label={name}
                    placeholder={name}
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