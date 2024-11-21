import { IPppLoanData } from "./IPppLoanData";
import { IJsonCount } from "./IJsonCount";

export interface IOuterJsonObject {
    jsondata: IPppLoanData[];
    jsonCount: IJsonCount[];
}
