import { IOuterJsonObject } from './IOuterJsonObject';

export interface IActionState {
    ppploanData: IOuterJsonObject;
    loading: boolean;
    error: string | null;
}
  