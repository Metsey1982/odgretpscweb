export interface IFilterTextFieldsProps {
    filterValues: {
      businesstype: string;
      naciscode: string;
      // Add other filter values as needed
    };
    handleFilterChange: (name: string, value: string) => void;
  }