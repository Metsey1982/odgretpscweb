import {IGeocodedColumn} from './IGeocodedColumn';

export interface IPppLoanData {
  loanrange: string;
  businessname: string;
  address: string;
  city: string;
  zip: string;
  naicscode: string;
  businesstype: string;
  raceethnicity: string;
  gender: string;
  veteran: string;
  jobsretained: number;
  dateapproved: string;
  lender: string;
  cd: string;
  geocoded_column: IGeocodedColumn;
}

