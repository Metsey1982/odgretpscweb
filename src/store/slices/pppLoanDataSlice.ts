import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchData,fetchPaginatedData} from '../thunks/ppploanThunk';
import {IActionState} from '../../interfaces/IActionState';
import { IOuterJsonObject } from '../../interfaces/IOuterJsonObject';

const initialState: IActionState = {
    ppploanData: {} as IOuterJsonObject,
    loading: false,
    error: null,
}
//console.log(initialState.ppploanData.jsondata);

const pppLoanDataSlice = createSlice ({
    name: 'ppploanData',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action:PayloadAction<IOuterJsonObject>) => {
                state.loading = false;
                state.ppploanData.jsondata = action.payload.jsondata;
                //console.log("Original Slice:" + action.payload.jsondata);
            })
            .addCase(fetchData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch data';
            })
            .addCase(fetchPaginatedData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPaginatedData.fulfilled, (state, action:PayloadAction<IOuterJsonObject>) => {
                state.loading = false;
                state.ppploanData.jsondata = action.payload.jsondata;
                //console.log("Paginated Slice:" + action.payload.jsondata);
            })
            .addCase(fetchPaginatedData.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch data';
            });
       },
});


export default pppLoanDataSlice.reducer;
