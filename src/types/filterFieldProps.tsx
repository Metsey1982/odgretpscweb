import { IFilterValues } from "../interfaces/IFilterValues";
type FilterFieldProps = {
    id: keyof IFilterValues;
    value: string;
    handleFilterValueChange: (id: keyof IFilterValues, value: string) => void;
  };
  
  export default FilterFieldProps;