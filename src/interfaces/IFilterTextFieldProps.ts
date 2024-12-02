import { IFilterValues } from '../interfaces/IFilterValues';
export interface IFilterTextFieldsProps {
    filterValues: {
      loanrange: string;
      businessname: string;
      address: string;
      city: string;
      state: string;
      zip: string;
      naicscode: string;
      businesstype: string;
      raceethnicity: string;
      gender: string;
      veteran: string;
      jobsretained: string;
      dateapproved: string;
      lender: string;
      cd: string;
      // Add other filter values as needed
    };
    id:keyof IFilterValues;
    value: string;
    handleFilterChange: (id: keyof IFilterValues, value: string) => void;
    handleSortValueChange: (id: keyof IFilterValues, sort: string) => void;
  }