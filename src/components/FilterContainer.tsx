import React from 'react';
import TextFieldContainer from "./AddFilterComponent";
import { Button } from '@mui/material';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { IFilterTextFieldsProps } from '../interfaces/IFilterTextFieldProps';

const FilterContainer: React.FC<IFilterTextFieldsProps> = ({ filterValues}) => {
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
    <div>
      <Button id="2" onClick={handleClearFilterButtononClick} variant="outlined" style={{width: "50px", float: "left"}}>Clear</Button>
      <Button id="3" variant="outlined" style={{width: "50px", float: "left"}}>Apply</Button>
      <TextFieldContainer />
    </div>
  );
};

export default FilterContainer;
