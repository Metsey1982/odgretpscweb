// src/configurations/config.ts

interface Config {
    apiBaseUrl: string;
    apiPaginatedUrl:string;
    // Add other configuration settings here
  }
  
  const config: Config = {
    apiBaseUrl: 'https://localhost:7294/api/PPPLoan',
    apiPaginatedUrl: '/serverpaginated/'
  };
  
  export default config;
  