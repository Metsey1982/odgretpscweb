import React from 'react';

export interface ISortColumnDescContextProps {
    sortControlDescComponents: {id: string, classNameValue: string}[];
    setSortControlDescComponent: (id: string) => void;
    resetSortControlDescComponents () : void;
  };