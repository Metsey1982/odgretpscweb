import React, {useState} from 'react';
import { Button } from '@mui/material';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { useGlobalShadowState } from '../contexts/GlobalStateShadowContext';
import { useGlobalSortState } from '../contexts/GlobalStateSortContext';
import { useGlobalShadowSortState } from '../contexts/GlobalStateShadowSortContext';
import { IFilterValues } from '../interfaces/IFilterValues';
import { ISortValues } from '../interfaces/ISortValues';
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

  const [sortValues, setSortValues] = useState<ISortValues>({
    id: "",
    sortdirection: "",
  })
  const {setGlobalSortArray} = useGlobalSortState();
  const {setGlobalArray} = useGlobalState();
  const {globalShadowArray, setGlobalShadowArray, addItemToGlobalShadowArray} = useGlobalShadowState();
  const {globalShadowSortArray, setGlobalShadowSortArray, addItemToGlobalShadowSortArray} = useGlobalShadowSortState();

  const handleSortValueChange = (Id: keyof IFilterValues, sortdirection: string) => {
    console.log('In handleSortValueChange Id: ' + Id + ' sort: ' + sortdirection);
    addItemToGlobalShadowSortArray(Id + sortdirection);
    setSortValues((prevSortValues) => ({
      ...prevSortValues,
      [Id]: sortdirection
    }));
  };
  //const handleAddFilterToStage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const handleFilterValueChange = (id: keyof IFilterValues, value: string) => {
      //const { value } = e.target;
      console.log('In handleFilterValueChange - id: ', ' value: ', value);      
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
      setGlobalSortArray(emptyTheGlobalArray);
      setGlobalShadowSortArray(emptyTheGlobalArray);
      clearFilterSortValues();
  };
  const handleApplyFilterButtononClick = () => {
     console.log('in handleApplyFilterButtononClick')
     setGlobalArray(globalShadowArray);
     const emptyTheGlobalArray: string[] = [];
     setGlobalShadowArray(emptyTheGlobalArray);
     setGlobalSortArray(globalShadowSortArray);
     setGlobalShadowSortArray(emptyTheGlobalArray);
     clearFilterSortValues();
  };
  const clearFilterSortValues = () => {
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
    setSortValues({
      id: "",
      sortdirection: "",
    });
  }

  return (
    <div className="filter-container">
      <Button id="2" onClick={handleClearFilterButtononClick} variant="outlined" style={{width: "50px", float: "left"}}>Clear</Button>
      <Button id="3" onClick={handleApplyFilterButtononClick} variant="outlined" style={{width: "50px", float: "left"}}>Apply</Button>{Object.keys(filterValues).map((key) => (
      <DynamicFilterField
          key={key}
          id={key as keyof IFilterValues}
          value={filterValues[key as keyof IFilterValues]}
          handleFilterValueChange={handleFilterValueChange}
          handleSortValueChange={handleSortValueChange}
        />
      ))}
    </div>
  );
};

export default FilterContainer;
