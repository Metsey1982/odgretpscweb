import React, {useState, useEffect} from 'react';
import { DataGrid, GridColDef, GridPaginationModel, GridSortModel} from '@mui/x-data-grid';
import { RootState, AppDispatch } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,fetchPaginatedData } from '../store/thunks/ppploanThunk';
import Button from '@mui/material/Button';
import { IPppLoanData } from '../interfaces/IPppLoanData';
import { IJsonCount } from '../interfaces/IJsonCount';
import { useGlobalState } from '../contexts/GlobalStateContext';
import FilterContainer from '../components/FilterContainer';
import { useGlobalSortState } from '../contexts/GlobalStateSortContext';
import { Box } from '@mui/material';

const Data: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {loading, error} = useSelector((state: RootState) => state.ppploanData);
    //const [sortModel, setSortModel] = useState<GridSortModel>([]);
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({pageSize: 25, page: 0});
    const [rows, setRows] = useState<IPppLoanData[]>([]);
    const [recordCount, setRecordCount] = useState<IJsonCount>({count_0: 0});
    
    const {globalArray} = useGlobalState();
    const {globalSortArray} = useGlobalSortState();

    const columns: GridColDef[] = [
        { field: 'loanrange', headerName: 'Loan Range', width: 150, filterable: false },
        { field: 'businessname', headerName: 'Business Name', width: 150, filterable: false },
        { field: 'address', headerName: 'Street Address', width: 150, sortable: false, filterable: false },
        { field: 'city', headerName: 'City', width: 150, filterable: false },
        { field: 'state', headerName: 'State', width: 100, filterable: false },
        { field: 'zip', headerName: 'Zipcode', width: 100, filterable: false },
        { field: 'naicscode', headerName: 'NACIS Code', width: 100,filterable: false },
        { field: 'businesstype', headerName: 'Business Type', width: 100, filterable: false },
        { field: 'raceethnicity', headerName: 'Race Ethnicity', width: 100, filterable: false },
        { field: 'gender', headerName: 'Gender', width: 100, filterable: false },
        { field: 'veteran', headerName: 'Veteran', width: 100, filterable: false },
        { field: 'jobsretained', headerName: 'Jobs Retained', width: 100, filterable: false },
        { field: 'dateapproved',  headerName: 'Date Approved', width: 100, filterable: false },
        { field: 'lender', headerName: 'Lender', width: 150, filterable: false },
        { field: 'cd', headerName: 'Congressional District', width: 100, filterable: false },
        { field: 'geocoded_column', headerName: 'GeoData', width: 350, sortable: false, filterable: false},
      ];
      //console.log("column0 filterOperators: " + columns[0].filterOperators);
       
      useEffect(() => {
         //Fetch datga for the current page and pageSize
         dispatch(fetchPaginatedData({page: paginationModel.page, pageSize: paginationModel.pageSize, filterModel: "nofilter", sortModel: "noorderby"}));
      }, [paginationModel.page, paginationModel.pageSize, dispatch]);

      useEffect(()=> {
        console.log("Updated Recordcount: " + recordCount.count_0)
      },[recordCount]);

      const handleSortModelChange = (model: GridSortModel) => 
      {
        console.log('Sort Changed: ', model);
        //program in data fetch with 
      };
 
      const handlePageChange = (model: GridPaginationModel) => {
        setPaginationModel(model);
        console.log('page: ' + paginationModel.page.toString() + ' and pageSize: ' + paginationModel.pageSize.toString());   
        dispatch(fetchPaginatedData({ page: model.page, pageSize: model.pageSize, filterModel: "nofilter", sortModel: "noorderby" }))
          .unwrap()
          .then((originalPromiseResult) => {
            //console.log(originalPromiseResult.jsondata);
            console.log(originalPromiseResult['jsonCount']);
            
            const parsedJsonCount = Array.isArray(originalPromiseResult.jsonCount)
              ? originalPromiseResult.jsonCount
              : JSON.parse(originalPromiseResult.jsonCount)
            
            const rowC = parsedJsonCount[0].count_0;
            console.log("rowC: " + rowC);

            setRecordCount({count_0: rowC});
            
            // Ensure jsondata is an array
            const parsedJsonData = Array.isArray(originalPromiseResult.jsondata)
              ? originalPromiseResult.jsondata
              : JSON.parse(originalPromiseResult.jsondata);
              //console.log("parsedJsonData: " + parsedJsonData);
            // Update rows state with parsed data
            setRows(parsedJsonData);
          })
          .catch((rejectedValueOrSerializedError) => {
            console.error('Error fetching data on button click:', rejectedValueOrSerializedError);
          });
     };
    
      const handleGetDataButtonClick = () => {
        //first set filter model
        //applyFilter();
        //next translate the filter model into formatted api filter string
        var _filterURL = "";
        if(globalArray.length === 0)
          _filterURL = "nofilter";
        else
        {
          globalArray.map((item) => (
            _filterURL = _filterURL += item.replace("_","=") + "&"
          ))
        }
        _filterURL = _filterURL.replaceAll(" ","+");
        console.log('filterURL-: ', _filterURL);
        //next set orderby model
        //next translate the orderby model into formatted api orderby string
        var _orderbyURL = "";
        if(globalSortArray.length === 0)
          _orderbyURL = "noorderby";
        else
        {
          globalSortArray.map((item) => (
            _orderbyURL = _orderbyURL += item + ","
          ))
        }
        _orderbyURL = _orderbyURL.replaceAll(" ","+");
        console.log('orderbyURL-: ', _orderbyURL);
        //call api 
        
        dispatch(fetchData({filterURL: _filterURL, orderbyURL: _orderbyURL}))
          .unwrap()
          .then((originalPromiseResult) => {
            //.toString()console.log(originalPromiseResult.jsondata);
            console.log(originalPromiseResult['jsonCount']);
            
            const parsedJsonCount = Array.isArray(originalPromiseResult.jsonCount)
              ? originalPromiseResult.jsonCount
              : JSON.parse(originalPromiseResult.jsonCount)
            
            const rowC = parsedJsonCount[0].count_0;
            console.log("rowC: " + rowC);
            setRecordCount({count_0: rowC});
            
            //console.log("Parsed Count: " + parsedJsonCount);
              
            // Ensure jsondata is an array
            const parsedJsonData = Array.isArray(originalPromiseResult.jsondata)
              ? originalPromiseResult.jsondata
              : JSON.parse(originalPromiseResult.jsondata);
              //consolepadding.log("parsedJsonData: " + parsedJsonData);
            // Update rows state with parsed data
            setRows(parsedJsonData);
          })
          .catch((rejectedValueOrSerializedError) => {
            console.error('Error fetching data on button click:', rejectedValueOrSerializedError);
          });
          
      };
 

    return (

            <Box style={{height: '50%', width: '100%', float: 'none' }}>
                <Box style={{height: '50px', width: "100%"}}> 
                <FilterContainer />
                </Box>
 

                <Box sx={{width: "100%",paddingTop: "20px" }}> 
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <Button id="1" style={{width: "90px", height: "25px", fontSize:"12px"}} onClick={handleGetDataButtonClick} variant="outlined">Get Data</Button>
                <DataGrid 
                  style={{color: 'black', backgroundColor: '#cbf0fb',border: "2px solid"}}
                  columns={columns} 
                  rows={rows}
                  rowHeight={25}
                  columnHeaderHeight={20}
                  sx={{
                    '& .MuiDataGrid-cell': {
                      fontSize: '14px', // Adjust the font size as needed
                    },
                  }}
                  getRowClassName={(params) => {
                    return params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row';}}
                  paginationMode='server'
                  rowCount={recordCount.count_0 | 0}
                  paginationModel={paginationModel}
                  pagination
                  onPaginationModelChange={handlePageChange}
                  onSortModelChange={handleSortModelChange}
                  getRowId={(row) => `${row.loanrange}-${row.businessname}-${row.address}`} // Specify a unique ID based on
                />
                </Box>
            </Box>

    );
};
export default Data;