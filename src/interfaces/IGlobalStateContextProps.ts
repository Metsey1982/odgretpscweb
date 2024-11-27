import React from 'react';

export interface IGlobalStateContextProps {
    globalArray: string[];
    setGlobalArray: React.Dispatch<React.SetStateAction<string[]>>;
    addItemToGlobalArray: (item: string) => void;
  };