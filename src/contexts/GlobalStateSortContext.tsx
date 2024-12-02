import React, {createContext, useState, useEffect,useContext} from 'react';
import {IGlobalStateSortProviderProps} from '../interfaces/IGlobalStateSortProviderProps';
import {IGlobalStateSortContextProps} from '../interfaces/IGlobalStateSortContextProps';

const GlobalStateSortContext = createContext<IGlobalStateSortContextProps | undefined>(undefined);

export const GlobalStateSortProvider: React.FC<IGlobalStateSortProviderProps> = ({ children }) => {
    const [globalSortArray, setGlobalSortArray] = useState<string[]>([]);

    useEffect(()=> {
      console.log('globalSortArray Size: ',globalSortArray.length)
    },[globalSortArray]);

    const addItemToGlobalSortArray = (item: string) => {
      console.log('In addItemToGlobalArray');
      if (globalSortArray.length === 0) {
          console.log('In globalSortArray == 0');
          setGlobalSortArray((globalSortArray) => [...globalSortArray, item]);
      } else {
          console.log('In globalSortArray != 0');
          const filterExactFound = globalSortArray.find(sortExactMatch => sortExactMatch === item);
  
          if (!filterExactFound) {
              console.log('!sortExactFound');
              const sortType = item.substring(0, item.indexOf("_"));
              console.log('sortType of item: ', sortType);
              const sortTypeFound = globalSortArray.find((str: string) => str.includes(sortType));
              
              if (sortTypeFound) {
                  console.log('filterTypeFound');
                  // Create a new array excluding the current filterType, then add the new item
                  const newTempGlobalArray: string[] = globalSortArray.filter((str: string) => !str.includes(sortType));
                  newTempGlobalArray.push(item);  // Add new item
                  console.log('tempGlobalArray Size after insert: ', newTempGlobalArray.length);
                  setGlobalSortArray(newTempGlobalArray);  // Update global array
              } else {
                  console.log('!filterTypeFound');
                  setGlobalSortArray((globalSortArray) => [...globalSortArray, item]);
              }
          }
      }
      console.log('Exiting');
};


    return (
      <GlobalStateSortContext.Provider value={{ globalSortArray, setGlobalSortArray, addItemToGlobalSortArray }}>
        {children}
      </GlobalStateSortContext.Provider>
    );
  };
  
  export const useGlobalSortState = (): IGlobalStateSortContextProps => {
    const context = useContext(GlobalStateSortContext);
    if (context === undefined) {
      throw new Error('useGlobalSortState must be used within a GlobalStateSortProvider');
    }
    return context;
  };
  