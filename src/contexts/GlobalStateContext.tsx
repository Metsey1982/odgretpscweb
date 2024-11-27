import React, {createContext, useState, useContext} from 'react';
import {IGlobalStateProviderProps} from '../interfaces/IGlobalStateProviderProps';
import {IGlobalStateContextProps} from '../interfaces/IGlobalStateContextProps';

const GlobalStateContext = createContext<IGlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<IGlobalStateProviderProps> = ({ children }) => {
    const [globalArray, setGlobalArray] = useState<string[]>([]);
  
    const addItemToGlobalArray = (item: string) => {
      setGlobalArray((prevArray) => [...prevArray, item]);
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
  