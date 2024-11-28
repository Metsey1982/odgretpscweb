// src/configurations/config.ts

interface Config {
    apiBaseUrl: string;
    apiPaginatedUrl:string;
    apiWithFilterUrl: string;
    // Add other configuration settings here
  }
  
  const config: Config = {
    apiBaseUrl: 'https://localhost:7294/api/PPPLoan',
    apiPaginatedUrl: '/serverpaginated/',
    apiWithFilterUrl: '/getwithfilter/'
  };
  
  export default config;
  