import React from 'react';
import TextFieldContainer from "./AddFilterComponent";
import { Button } from '@mui/material';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { useGlobalIdState } from '../contexts/GlobalStateIdContext';

const FilterContainer: React.FC = () => {
  const {globalArray,setGlobalArray} = useGlobalState();
  const {globalIdArray,setGlobalIdArray} = useGlobalIdState();

        const handleClearFilterButtononClick = () => {
            //filterValues.businesstype = "";
            //console.log('filterValues.businesstype after clear: ',filterValues.businesstype);
            const emptyTheGlobalArray: string[] = [];
            setGlobalArray(emptyTheGlobalArray);
            setGlobalIdArray(emptyTheGlobalArray);
            console.log('After Empty Array: ',globalArray.length + ":" + globalIdArray.length);
            //clear the filter field
        };
        const handleApplyFilterButtononClick = () => {
            console.log('in handleApplyFilterButtononClick')
            setGlobalArray(globalIdArray);
        }
  return (
    <div>
      <Button id="2" onClick={handleClearFilterButtononClick} variant="outlined" style={{width: "50px", float: "left"}}>Clear</Button>
      <Button id="3" onClick={handleApplyFilterButtononClick} variant="outlined" style={{width: "50px", float: "left"}}>Apply</Button>
      <TextFieldContainer />
    </div>
  );
};

export default FilterContainer;
