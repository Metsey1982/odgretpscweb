import React, {useState, useEffect} from 'react';
import '../styles/bulma.css';
import { DataGrid, GridColDef, GridPaginationModel, GridSortModel,GridFilterModel, GridFilterOperator, GridFilterInputValue, GridFilterItem } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import { RootState, AppDispatch } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,fetchPaginatedData } from '../store/thunks/ppploanThunk';
import Button from '@mui/material/Button';
import { IPppLoanData } from '../interfaces/IPppLoanData';
import { IJsonCount } from '../interfaces/IJsonCount';
import Filter from '../components/Filter';
const Data: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {loading, error} = useSelector((state: RootState) => state.ppploanData);
    const [sortModel, setSortModel] = useState<GridSortModel>([]);
    
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ 
      pageSize: 25, page: 0
    });
    
    const [rows, setRows] = useState<IPppLoanData[]>([]);
    
    const[recordCount, setRecordCount] = useState<IJsonCount>({
      count_0: 0
    });
    
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
        { field: 'geocoded_column', headerName: 'ID', width: 350, sortable: false, filterable: false},
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

      const handleTestFilterButtononClick = () => 
      {
        //var ct = applyFilterModel.items.entries.length
        //console.log('item count: ', ct.toString());
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
    
      const handleApplyFilterButtononClick = () => {

      }
      const handleGetDataButtonClick = () => {
        dispatch(fetchData({}))
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
              //console.log("parsedJsonData: " + parsedJsonData);
            // Update rows state with parsed data
            setRows(parsedJsonData);
          })
          .catch((rejectedValueOrSerializedError) => {
            console.error('Error fetching data on button click:', rejectedValueOrSerializedError);
          });
      };
    
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            <div style={{height: '50%', width: '100%' }}>

                <Button id="1" onClick={handleGetDataButtonClick} variant="outlined">Get Loan Data</Button>
                <Button id="2" onClick={handleApplyFilterButtononClick} variant="outlined">Apply Filter</Button>
                <Button id="3" onClick={handleTestFilterButtononClick} variant="outlined">Apply Filter Status</Button>
              <div>
              <div style={{height: "10px", width: "100%"}}> 

              </div>
              <div style={{height: "40px", width: "100%"}}> 
                <Filter/>
              </div>
              
            </div>
            <DataGrid 
                style={{color: "black", backgroundColor: "lightgrey"}}
                columns={columns} 
                //rows"={JSON.parse(JSON.stringify(ppploanData.jsondata.toString()))} 
                rows={rows}
                paginationMode='server'
                rowCount={recordCount.count_0 | 0}
                paginationModel={paginationModel}
                pagination
                onPaginationModelChange={handlePageChange}
                onSortModelChange={handleSortModelChange}
                getRowId={(row) => `${row.loanrange}-${row.businessname}-${row.address}`} // Specify a unique ID based on
                />
                
            </div>
        </div>
    );
};

export default Data;