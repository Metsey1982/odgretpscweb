import React from 'react';

export interface IGlobalStateSortContextProps {
    globalSortArray: string[];
    setGlobalSortArray: React.Dispatch<React.SetStateAction<string[]>>;
    addItemToGlobalSortArray: (item: string) => void;
  };