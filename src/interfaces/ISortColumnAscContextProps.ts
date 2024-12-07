import React from 'react';

export interface ISortColumnAscContextProps {
    sortControlAscComponents: {id: string, classNameValue: string}[];
    setSortControlAscComponent: (id: string) => void;
    resetSortControlAscComponent: (id: string) => void;
    resetSortControlAscComponents () : void;
  };
