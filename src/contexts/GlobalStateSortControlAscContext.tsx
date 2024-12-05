import React, {createContext, useState} from 'react';
import {ISortColumnAscContextProps} from '../interfaces/ISortColumnAscContextProps';
import {ISortColumnAscProviderProps} from '../interfaces/ISortColumnAscProviderProps';

const GlobalSortComponentAscContext = createContext<ISortColumnAscContextProps | undefined>(undefined);

const  GlobalSortComponentAscProvider: React.FC<ISortColumnAscProviderProps> = ({ children }) => {
    const [sortControlAscComponents, setSortControlAscComponents] = useState<{id: string; classNameValue: string}[]>([
        {id: 'loanrange', classNameValue:'hoverSortAsc'},
        {id: 'businessname', classNameValue:'hoverSortAsc'},
        {id: 'address', classNameValue:'hoverSortAsc'},   
        {id: 'city', classNameValue:'hoverSortAsc'},   
        {id: 'state', classNameValue:'hoverSortAsc'},   
        {id: 'zip', classNameValue:'hoverSortAsc'},   
        {id: 'naicscode', classNameValue:'hoverSortAsc'},   
        {id: 'businesstype', classNameValue:'hoverSortAsc'},   
        {id: 'raceethnicity', classNameValue:'hoverSortAsc'},   
        {id: 'gender', classNameValue:'hoverSortAsc'},   
        {id: 'veteran', classNameValue:'hoverSortAsc'},   
        {id: 'jobsretained', classNameValue:'hoverSortAsc'},   
        {id: 'dateapproved', classNameValue:'hoverSortAsc'},   
        {id: 'lender', classNameValue:'hoverSortAsc'},   
        {id: 'cd', classNameValue:'hoverSortAsc'},   
    ]);
    const setSortControlAscComponent = (id: string) => {
        setSortControlAscComponents(components => 
            components.map(component =>
                component.id === id ? {...component, classNameValue:'hoverSortAscActive'} : component
            )
        );
    };
    const resetSortControlAscComponents = () => {
        const resetComponents = sortControlAscComponents.map(component => ({
            ...component,
            classNameValue: 'hoverSortAsc'
        }));
        setSortControlAscComponents(resetComponents);
    };
      return (
        < GlobalSortComponentAscContext.Provider value={{ sortControlAscComponents, setSortControlAscComponent,resetSortControlAscComponents}}>
          {children}
        </ GlobalSortComponentAscContext.Provider>
      );
    };
    export {GlobalSortComponentAscProvider,GlobalSortComponentAscContext}
 