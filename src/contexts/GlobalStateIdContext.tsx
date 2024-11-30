import React, {createContext, useState, useEffect,useContext} from 'react';
import {IGlobalStateIdProviderProps} from '../interfaces/IGlobalStateIdProviderProps';
import {IGlobalStateIdContextProps} from '../interfaces/IGlobalStateIdContextProps';

const GlobalStateIdContext = createContext<IGlobalStateIdContextProps | undefined>(undefined);

export const GlobalStateIdProvider: React.FC<IGlobalStateIdProviderProps> = ({ children }) => {
    const [globalIdArray, setGlobalIdArray] = useState<string[]>([]);

    useEffect(()=> {
      console.log('globalIdArray Size: ',globalIdArray.length)
    },[globalIdArray]);

    const addItemToGlobalIdArray = (item: string) => {
      console.log('In addItemToGlobalIdArray');
      if (globalIdArray.length === 0) {
          console.log('In globalIdArray == 0');
          setGlobalIdArray((globalIdArray) => [...globalIdArray, item]);
      } else {
          console.log('In globalIdArray != 0');
          const filterExactFound = globalIdArray.find(filterExactMatch => filterExactMatch === item);
  
          if (!filterExactFound) {
              console.log('!filterExactFound');
              const filterType = item.substring(0, item.indexOf("_"));
              console.log('filterType of item: ', filterType);
              const filterTypeFound = globalIdArray.find((str: string) => str.includes(filterType));
              
              if (filterTypeFound) {
                  console.log('filterTypeFound');
                  // Create a new array excluding the current filterType, then add the new item
                  const newTempGlobalIdArray: string[] = globalIdArray.filter((str: string) => !str.includes(filterType));
                  newTempGlobalIdArray.push(item);  // Add new item
                  console.log('tempGlobalIdArray Size after insert: ', newTempGlobalIdArray.length);
                  setGlobalIdArray(newTempGlobalIdArray);  // Update global array
              } else {
                  console.log('!filterTypeFound');
                  setGlobalIdArray((globalIdArray) => [...globalIdArray, item]);
              }
          }
      }
      console.log('Exiting');
};

    return (
      <GlobalStateIdContext.Provider value={{ globalIdArray, setGlobalIdArray, addItemToGlobalIdArray }}>
        {children}
      </GlobalStateIdContext.Provider>
    );
  };
  
  export const useGlobalIdState = (): IGlobalStateIdContextProps => {
    const context = useContext(GlobalStateIdContext);
    if (context === undefined) {
      throw new Error('useGlobalIdState must be used within a GlobalStateIdProvider');
    }
    return context;
  };
  