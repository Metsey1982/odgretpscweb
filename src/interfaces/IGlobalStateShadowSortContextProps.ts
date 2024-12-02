import React from 'react';

export interface IGlobalStateShadowSortContextProps {
    globalShadowSortArray: string[];
    setGlobalShadowSortArray: React.Dispatch<React.SetStateAction<string[]>>;
    addItemToGlobalShadowSortArray: (item: string) => void;
  };