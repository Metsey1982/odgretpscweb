import React, {useState, useContext} from 'react';
import { Button } from '@mui/material';
import { Stack} from '@mui/material';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { useGlobalShadowState } from '../contexts/GlobalStateShadowContext';
import { useGlobalSortState } from '../contexts/GlobalStateSortContext';
import { useGlobalShadowSortState } from '../contexts/GlobalStateShadowSortContext';
import { IFilterValues } from '../interfaces/IFilterValues';
import { ISortValues } from '../interfaces/ISortValues';
import {GlobalSortComponentAscContext} from '../contexts/GlobalStateSortControlAscContext'
import {GlobalSortComponentDescContext} from '../contexts/GlobalStateSortControlDescContext'
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
  const sortControlAscContext = useContext(GlobalSortComponentAscContext);
  if(!sortControlAscContext){
    throw new Error('GlobalSortComponentAscContext must be used within a GlobalSortComponentAscProvider');
  }
  const { resetSortControlAscComponents } = sortControlAscContext;
  const sortControlDescContext = useContext(GlobalSortComponentDescContext);
  if(!sortControlDescContext){
    throw new Error('GlobalSortComponentDesccContext must be used within a GlobalSortComponentDescProvider');
  }
  const { resetSortControlDescComponents } = sortControlDescContext;
  const [, setSortValues] = useState<ISortValues>({
    id: "",
    sortdirection: "",
  })
  const {setGlobalSortArray} = useGlobalSortState();
  const {setGlobalArray} = useGlobalState();
  const {globalShadowArray, setGlobalShadowArray, addItemToGlobalShadowArray} = useGlobalShadowState();
  const {globalShadowSortArray, setGlobalShadowSortArray, addItemToGlobalShadowSortArray} = useGlobalShadowSortState();

  const setSortValueArray = (Id: keyof IFilterValues, sortdirection: string) => {

    console.log('In handleSortValueChange Id: ' + Id + ' sort: ' + sortdirection);
    addItemToGlobalShadowSortArray(Id + sortdirection);
    
    setSortValues((sortValues) => ({
      ...sortValues,
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
      resetSortControlAscComponents();
      resetSortControlDescComponents();
  };
  const handleApplyFilterButtononClick = () => {
     console.log('in handleApplyFilterButtononClick')
     setGlobalArray(globalShadowArray);
     const emptyTheGlobalArray: string[] = [];
     setGlobalShadowArray(emptyTheGlobalArray);
     setGlobalSortArray(globalShadowSortArray);
     setGlobalShadowSortArray(emptyTheGlobalArray);
     clearFilterSortValues();
     resetSortControlAscComponents();
     resetSortControlDescComponents();
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
    <div>
  
        <Button id="2" onClick={handleClearFilterButtononClick} variant="outlined" style={{color: "#5dade2",float: "left", height: "25px", fontSize:"12px"}}>Clear</Button>
        <Button id="3" onClick={handleApplyFilterButtononClick} variant="outlined" style={{color: "#5dade2",float: "none", height: "25px", fontSize:"12px"}}>Apply</Button>
          <Stack className="filter-container" direction="row">
            {Object.keys(filterValues).map((key) => (
            <DynamicFilterField
                key={key}
                id={key as keyof IFilterValues}
                value={filterValues[key as keyof IFilterValues]}
                handleFilterValueChange={handleFilterValueChange}
                setSortValueArray={setSortValueArray}
                
              />
              

          ))}
          </Stack>

    </div>
  );
};

export default FilterContainer;
