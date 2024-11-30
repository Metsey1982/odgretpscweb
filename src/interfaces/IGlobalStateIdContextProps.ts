import React from 'react';

export interface IGlobalStateIdContextProps {
    globalIdArray: string[];
    setGlobalIdArray: React.Dispatch<React.SetStateAction<string[]>>;
    addItemToGlobalIdArray: (item: string) => void;
  };