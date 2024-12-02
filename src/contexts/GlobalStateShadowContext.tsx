import React, {createContext, useState, useEffect,useContext} from 'react';
import {IGlobalStateShadowProviderProps} from '../interfaces/IGlobalStateShadowProviderProps';
import {IGlobalStateShadowContextProps} from '../interfaces/IGlobalStateShadowContextProps';

const GlobalStateShadowContext = createContext<IGlobalStateShadowContextProps | undefined>(undefined);

export const GlobalStateShadowProvider: React.FC<IGlobalStateShadowProviderProps> = ({ children }) => {
    const [globalShadowArray, setGlobalShadowArray] = useState<string[]>([]);

    useEffect(()=> {
      console.log('globalShadowArray Size: ',globalShadowArray.length)
    },[globalShadowArray]);

    const addItemToGlobalShadowArray = (item: string) => {
      console.log('In addItemToGlobalShadowArray');
      if (globalShadowArray.length === 0) {
          console.log('In globalShadowArray == 0');
          setGlobalShadowArray((globalShadowArray) => [...globalShadowArray, item]);
      } else {
          console.log('In globalShadowArray != 0');
          const filterExactFound = globalShadowArray.find(filterExactMatch => filterExactMatch === item);
  
          if (!filterExactFound) {
              console.log('!filterExactFound');
              const filterType = item.substring(0, item.indexOf("_"));
              console.log('filterType of item: ', filterType);
              const filterTypeFound = globalShadowArray.find((str: string) => str.includes(filterType));
              
              if (filterTypeFound) {
                  console.log('filterTypeFound');
                  // Create a new array excluding the current filterType, then add the new item
                  const newTempGlobalShadowArray: string[] = globalShadowArray.filter((str: string) => !str.includes(filterType));
                  newTempGlobalShadowArray.push(item);  // Add new item
                  console.log('tempglobalShadowArray Size after insert: ', newTempGlobalShadowArray.length);
                  setGlobalShadowArray(newTempGlobalShadowArray);  // Update global array
              } else {
                  console.log('!filterTypeFound');
                  setGlobalShadowArray((globalShadowArray) => [...globalShadowArray, item]);
              }
          }
      }
      console.log('Exiting');
};

    return (
      <GlobalStateShadowContext.Provider value={{ globalShadowArray, setGlobalShadowArray, addItemToGlobalShadowArray }}>
        {children}
      </GlobalStateShadowContext.Provider>
    );
  };
  
  export const useGlobalShadowState = (): IGlobalStateShadowContextProps => {
    const context = useContext(GlobalStateShadowContext);
    if (context === undefined) {
      throw new Error('useGlobalShadowState must be used within a GlobalStateShadowProvider');
    }
    return context;
  };