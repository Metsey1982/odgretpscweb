import React, {useState} from 'react';
import FilterFieldContainer from "./DynamicFilterField";
import { Button } from '@mui/material';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { useGlobalShadowState } from '../contexts/GlobalStateShadowContext';
import { IFilterValues } from '../interfaces/IFilterValues';
import DynamicFilterField from './DynamicFilterField';

const FilterContainer: React.FC = () => {
  const [filterValues, setFilterValues] = useState<IFilterValues>({
    loanrange: "",
    businessname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    naicscode: "",
    businesstype: "",
    raceethnicity: "",
    gender: "",
    veteran: "",
    jobsretained: "",
    dateapproved: "",
    lender: "",
    cd:  "", 

  })
  const {globalArray,setGlobalArray} = useGlobalState();
  const {globalShadowArray,setGlobalShadowArray} = useGlobalShadowState();
  const {addItemToGlobalShadowArray} = useGlobalShadowState();

  //const handleAddFilterToStage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const handleFilterValueChange = (id: keyof IFilterValues, value: string) => {
      //const { value } = e.target;
      console.log('In handleAddFilter - id: ', ' value: ', value);      
      addItemToGlobalShadowArray(id + "_" + value);
      setFilterValues((prevFilterValues) => ({
        ...prevFilterValues,
        [id]: value
      }));
  };       
  const handleClearFilterButtononClick = () => {     
      const emptyTheGlobalArray: string[] = [];
      setGlobalArray(emptyTheGlobalArray);
      setGlobalShadowArray(emptyTheGlobalArray);
      clearFilterValues();
  };
  const handleApplyFilterButtononClick = () => {
     console.log('in handleApplyFilterButtononClick')
     setGlobalArray(globalShadowArray);
     const emptyTheGlobalArray: string[] = [];
     setGlobalShadowArray(emptyTheGlobalArray);
     clearFilterValues();
  };
  const clearFilterValues = () => {
    setFilterValues({
      loanrange: "",
      businessname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      naicscode: "",
      businesstype: "",
      raceethnicity: "",
      gender: "",
      veteran: "",
      jobsretained: "",
      dateapproved: "",
      lender: "",
      cd:  "", 
    });
  }

  return (
    <div>
      <Button id="2" onClick={handleClearFilterButtononClick} variant="outlined" style={{width: "50px", float: "left"}}>Clear</Button>
      <Button id="3" onClick={handleApplyFilterButtononClick} variant="outlined" style={{width: "50px", float: "left"}}>Apply</Button>      {Object.keys(filterValues).map((key) => (
      <DynamicFilterField
          key={key}
          id={key as keyof IFilterValues}
          value={filterValues[key as keyof IFilterValues]}
          handleFilterValueChange={handleFilterValueChange}
        />
      ))}
    </div>
  );
};

export default FilterContainer;
