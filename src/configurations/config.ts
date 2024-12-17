// src/configurations/config.ts

interface Config {
    apiBaseUrl: string;
    apiPaginatedUrl:string;
    apiWithFilterUrl: string;
    azfBaseUrl: string;
    azfPaginatedUrl: string;
    azfWithFilterUrl: string;
    azfKey: string;
    // Add other configuration settings here
  }
  
  const config: Config = {
    apiBaseUrl: 'https://ppploan-gdgbctfqa0c2fda4.eastus2-01.azurewebsites.net/api/PPPLoan',
    //apiBaseUrl: 'https://localhost:7294/api/PPPLoan',
    apiPaginatedUrl: '/serverpaginated/',
    apiWithFilterUrl: '/getwithfilter/',
    azfPaginatedUrl: '/serverpaginated/',
    azfWithFilterUrl: '/getwithfilter/',
    azfBaseUrl: 'https://odgazfdata.azurewebsites.net/api',
    azfKey: '?code=2elvjIPiQOAqdljOH_NrYVOM6evrkAk4E6U62Jx_V6OxAzFuBxLimg=='
  };
  
  export default config;
  