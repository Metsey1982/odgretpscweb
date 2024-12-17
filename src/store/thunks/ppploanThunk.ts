import {createAsyncThunk } from '@reduxjs/toolkit';
import {IOuterJsonObject} from '../../interfaces/IOuterJsonObject';
import Config from '../../../src/configurations/config';
import {useEffect} from  'react';


// Initial Pull of Data
export const fetchData = createAsyncThunk<IOuterJsonObject, {filterURL: string, orderbyURL: string}, { rejectValue: string }>(
  'ppploanData/fetchData',
  async ({filterURL,orderbyURL},{ rejectWithValue }) => {
    try {
      var azfKey = "";
      useEffect(() => {
        let azfKey = process.env.REACT_APP_AZF_KEY;
        console.log('AZF Key:', azfKey);
      }, []);
      //const baseUrl = 'https://ppploan-gdgbctfqa0c2fda4.eastus2-01.azurewebsites.net/api/PPPLoan/paginated/';
      //const baseUrl = `${Config.apiBaseUrl}`;
      const baseUrl = `${Config.azfBaseUrl}`;
      //const filterUrl = `${Config.apiWithFilterUrl}`;
      const filterRouteUrl = `${Config.azfWithFilterUrl}`;
      const FilterUrl = `${filterURL}/`;
      const OrderByUrl = `${orderbyURL}`;
      const AzfKey = `${azfKey}`;
      //console.log('api call url: ',baseUrl + filterRouteUrl + FilterUrl + OrderByUrl + azfKey);

      //const params = page.toString() + '/' + pageSize.toString();
      //const params = new URLSearchParams({page.toString(), pageSize: pageSize.toString() });
      //const url = `${baseUrl}${params.toString()}`;
      //const response = await fetch('https://ppploan-gdgbctfqa0c2fda4.eastus2-01.azurewebsites.net/api/PPPLoan/paginated/1/5');
      const response = await fetch(baseUrl + filterRouteUrl + FilterUrl + OrderByUrl + AzfKey);
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
export const fetchPaginatedData = createAsyncThunk<IOuterJsonObject, {pageSize: number, page: number, filterModel: string , sortModel: string}, { rejectValue: string }>(
  'ppploanData/fetchPaginatedData',
  async ({pageSize,page,filterModel,sortModel}, { rejectWithValue }) => {
    try {
      var azfKey = "";
      useEffect(() => {
        let azfKey = process.env.REACT_APP_AZF_KEY;
        console.log('AZF Key:', azfKey);
      }, []);
      //const baseUrl = 'https://ppploan-gdgbctfqa0c2fda4.eastus2-01.azurewebsites.net/api/PPPLoan/paginated/';
      //const baseUrl = `${Config.apiBaseUrl}`;
      //const apiPaginatedUrl = `${Config.apiPaginatedUrl}`;
      const baseUrl = `${Config.azfBaseUrl}`;
      const paginatedRouteUrl = `${Config.azfPaginatedUrl}`;
      const AzfKey = `${azfKey}`;
      //const params = page.toString() + '/' + pageSize.toString();
      //const params = new URLSearchParams({page.toString(), pageSize: pageSize.toString() });
      //const url = `${baseUrl}${params.toString()}`;
      
      const paramUrl = `${pageSize}/${page}/${filterModel}/${sortModel}`;

      const response = await fetch(baseUrl + paginatedRouteUrl + paramUrl + AzfKey);

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
