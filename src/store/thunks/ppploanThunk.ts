import {createAsyncThunk } from '@reduxjs/toolkit';
import {IOuterJsonObject} from '../../interfaces/IOuterJsonObject';
import Config from '../../../src/configurations/config';


// Initial Pull of Data
export const fetchData = createAsyncThunk<IOuterJsonObject, {}, { rejectValue: string }>(
  'ppploanData/fetchData',
  async ({}, { rejectWithValue }) => {
    try {
      //const baseUrl = 'https://ppploan-gdgbctfqa0c2fda4.eastus2-01.azurewebsites.net/api/PPPLoan/paginated/';
      const baseUrl = `${Config.apiBaseUrl}`;

      //const params = page.toString() + '/' + pageSize.toString();
      //const params = new URLSearchParams({page.toString(), pageSize: pageSize.toString() });
      //const url = `${baseUrl}${params.toString()}`;
       
      const response = await fetch(baseUrl);
      //const response = await fetch('https://ppploan-gdgbctfqa0c2fda4.eastus2-01.azurewebsites.net/api/PPPLoan/paginated/1/5');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const IOObjectdata: IOuterJsonObject = await response.json();
      
      return IOObjectdata;
    } catch (err) {
      return rejectWithValue('Failed to fetch data');
    }
  }
);
// Call for forward/backward page or change in pagesize
export const fetchPaginatedData = createAsyncThunk<IOuterJsonObject, {pageSize: number, page: number}, { rejectValue: string }>(
  'ppploanData/fetchPaginatedData',
  async ({pageSize,page}, { rejectWithValue }) => {
    try {
      //const baseUrl = 'https://ppploan-gdgbctfqa0c2fda4.eastus2-01.azurewebsites.net/api/PPPLoan/paginated/';
      const baseUrl = `${Config.apiBaseUrl}`;
      const apiPaginatedUrl = `${Config.apiPaginatedUrl}`;

      //const params = page.toString() + '/' + pageSize.toString();
      //const params = new URLSearchParams({page.toString(), pageSize: pageSize.toString() });
      //const url = `${baseUrl}${params.toString()}`;
      
      const varUrl = `${pageSize}/${page}/nofilter/noorderby`;

      const response = await fetch(baseUrl + apiPaginatedUrl + varUrl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const IOObjectPagdata: IOuterJsonObject = await response.json();
      
      return IOObjectPagdata;
    } catch (err) {
      return rejectWithValue('Failed to fetch data');
    }
  }
);
