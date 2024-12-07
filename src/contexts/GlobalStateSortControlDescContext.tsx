import React, {createContext, useState} from 'react';
import {ISortColumnDescContextProps} from '../interfaces/ISortColumnDescContextProps';
import {ISortColumnDescProviderProps} from '../interfaces/ISortColumnDescProviderProps';

const GlobalSortComponentDescContext = createContext<ISortColumnDescContextProps | undefined>(undefined);

const  GlobalSortComponentDescProvider: React.FC<ISortColumnDescProviderProps> = ({ children }) => {
    const [sortControlDescComponents, setSortControlDescComponents] = useState<{id: string; classNameValue: string}[]>([
        {id: 'loanrange', classNameValue:'hoverSortDesc'},
        {id: 'businessname', classNameValue:'hoverSortDesc'},
        {id: 'address', classNameValue:'hoverSortDesc'},   
        {id: 'city', classNameValue:'hoverSortDesc'},   
        {id: 'state', classNameValue:'hoverSortDesc'},   
        {id: 'zip', classNameValue:'hoverSortDesc'},   
        {id: 'naicscode', classNameValue:'hoverSortDesc'},   
        {id: 'businesstype', classNameValue:'hoverSortDesc'},   
        {id: 'raceethnicity', classNameValue:'hoverSortDesc'},   
        {id: 'gender', classNameValue:'hoverSortDesc'},   
        {id: 'veteran', classNameValue:'hoverSortDesc'},   
        {id: 'jobsretained', classNameValue:'hoverSortDesc'},   
        {id: 'dateapproved', classNameValue:'hoverSortDesc'},   
        {id: 'lender', classNameValue:'hoverSortDesc'},   
        {id: 'cd', classNameValue:'hoverSortDesc'},   
    ]);
    const setSortControlDescComponent = (id: string) => {
        console.log('In setSortControlDescComponents for id: ', id);
        setSortControlDescComponents(components => 
            components.map(component =>
                component.id === id ? {...component, classNameValue:'hoverSortDescActive'} : component
            )
        );
    };
    const resetSortControlDescComponent = (id: string) => {
        console.log('In resetSortControlDescComponent for id: ', id);
        setSortControlDescComponents(components => 
            components.map(component =>
                component.id === id ? {...component, classNameValue:'hoverSortDesc'} : component
            )
        );
    };
    const resetSortControlDescComponents = () => {
        console.log('In resetSortControlDescComponents');
        const resetComponents = sortControlDescComponents.map(component => ({
            ...component,
            classNameValue: 'hoverSortDesc'
        }));
        setSortControlDescComponents(resetComponents);
    };
      return (
        < GlobalSortComponentDescContext.Provider value={{ sortControlDescComponents, setSortControlDescComponent,resetSortControlDescComponent,resetSortControlDescComponents}}>
          {children}
        </ GlobalSortComponentDescContext.Provider>
      );
    };
    export {GlobalSortComponentDescProvider,GlobalSortComponentDescContext}
 