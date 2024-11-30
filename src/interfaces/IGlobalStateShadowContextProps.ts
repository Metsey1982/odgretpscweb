import React from 'react';

export interface IGlobalStateShadowContextProps {
    globalShadowArray: string[];
    setGlobalShadowArray: React.Dispatch<React.SetStateAction<string[]>>;
    addItemToGlobalShadowArray: (item: string) => void;
  };