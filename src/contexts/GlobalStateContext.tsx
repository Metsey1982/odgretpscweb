import React, {createContext, useState, useEffect,useContext} from 'react';
import {IGlobalStateProviderProps} from '../interfaces/IGlobalStateProviderProps';
import {IGlobalStateContextProps} from '../interfaces/IGlobalStateContextProps';

const GlobalStateContext = createContext<IGlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<IGlobalStateProviderProps> = ({ children }) => {
    const [globalArray, setGlobalArray] = useState<string[]>([]);

    useEffect(()=> {
      console.log('globalArray Size: ',globalArray.length)
    },[globalArray]);

    const addItemToGlobalArray = (item: string) => {
      console.log('In addItemToGlobalArray');
      if (globalArray.length === 0) {
          console.log('In globalArray == 0');
          setGlobalArray((globalArray) => [...globalArray, item]);
      } else {
          console.log('In globalArray != 0');
          const filterExactFound = globalArray.find(filterExactMatch => filterExactMatch === item);
  
          if (!filterExactFound) {
              console.log('!filterExactFound');
              const filterType = item.substring(0, item.indexOf("_"));
              console.log('filterType of item: ', filterType);
              const filterTypeFound = globalArray.find((str: string) => str.includes(filterType));
              
              if (filterTypeFound) {
                  console.log('filterTypeFound');
                  // Create a new array excluding the current filterType, then add the new item
                  const newTempGlobalArray: string[] = globalArray.filter((str: string) => !str.includes(filterType));
                  newTempGlobalArray.push(item);  // Add new item
                  console.log('tempGlobalArray Size after insert: ', newTempGlobalArray.length);
                  setGlobalArray(newTempGlobalArray);  // Update global array
              } else {
                  console.log('!filterTypeFound');
                  setGlobalArray((globalArray) => [...globalArray, item]);
              }
          }
      }
      console.log('Exiting');
};


    return (
      <GlobalStateContext.Provider value={{ globalArray, setGlobalArray, addItemToGlobalArray }}>
        {children}
      </GlobalStateContext.Provider>
    );
  };
  
  export const useGlobalState = (): IGlobalStateContextProps => {
    const context = useContext(GlobalStateContext);
    if (context === undefined) {
      throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
  };
  