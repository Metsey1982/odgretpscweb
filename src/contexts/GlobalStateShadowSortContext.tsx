import React, {createContext, useState, useEffect,useContext} from 'react';
import {IGlobalStateShadowSortProviderProps} from '../interfaces/IGlobalStateShadowSortProviderProps';
import {IGlobalStateShadowSortContextProps} from '../interfaces/IGlobalStateShadowSortContextProps';

const GlobalStateShadowSortContext = createContext<IGlobalStateShadowSortContextProps | undefined>(undefined);

export const GlobalStateShadowSortProvider: React.FC<IGlobalStateShadowSortProviderProps> = ({ children }) => {
    const [globalShadowSortArray, setGlobalShadowSortArray] = useState<string[]>([]);

    useEffect(()=> {
      console.log('globalSortArray Size: ',globalShadowSortArray.length)
    },[globalShadowSortArray]);

    const addItemToGlobalShadowSortArray = (item: string) => {
      console.log('In addItemToGlobalArray');
      if (globalShadowSortArray.length === 0) {
          console.log('In globalSortArray == 0');
          setGlobalShadowSortArray((globalShadowSortArray) => [...globalShadowSortArray, item]);
      } else {
          console.log('In globalSortArray != 0');
          const sortExactFound = globalShadowSortArray.find(sortExactMatch => sortExactMatch === item);
  
          if (!sortExactFound) {
              console.log('!sortExactFound')

              let sortType: string = ''; 
              sortType = item.indexOf("_d") > 0 ? item.substring(0, item.indexOf("_d")) : item;              

              console.log('sortType of item: ', sortType);
              
              const sortTypeFound = globalShadowSortArray.find((str: string) => str.includes(sortType));
               
              if (sortTypeFound) {
                  console.log('sortTypeFound');
                  // Create a new array excluding the current filterType, then add the new item
                  const newTempGlobalArray: string[] = globalShadowSortArray.filter((str: string) => !str.includes(sortType));
                  newTempGlobalArray.push(item);  // Add new item
                  console.log('tempGlobalArray Size after insert: ', newTempGlobalArray.length);
                  setGlobalShadowSortArray(newTempGlobalArray);  // Update global array
              } else {
                  console.log('!sortTypeFound');
                  setGlobalShadowSortArray((globalShadowSortArray) => [...globalShadowSortArray, item]);
              }
          }
      }
      console.log('Exiting');
};


    return (
      <GlobalStateShadowSortContext.Provider value={{ globalShadowSortArray, setGlobalShadowSortArray, addItemToGlobalShadowSortArray }}>
        {children}
      </GlobalStateShadowSortContext.Provider>
    );
  };
  
  export const useGlobalShadowSortState = (): IGlobalStateShadowSortContextProps => {
    const context = useContext(GlobalStateShadowSortContext);
    if (context === undefined) {
      throw new Error('useGlobalShadowSortState must be used within a GlobalStateShadowSortProvider');
    }
    return context;
  };
  