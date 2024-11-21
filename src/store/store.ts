import {configureStore} from '@reduxjs/toolkit';
import pppLoanDataReducer from './slices/pppLoanDataSlice';
//import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        ppploanData: pppLoanDataReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;