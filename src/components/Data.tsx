import React, {useState, useEffect} from 'react';
import '../styles/bulma.css';
import { DataGrid, GridColDef, GridPaginationModel, GridSortModel,GridFilterModel } from '@mui/x-data-grid';
import { RootState, AppDispatch } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,fetchPaginatedData } from '../store/thunks/ppploanThunk';
import Button from '@mui/material/Button';
import { IPppLoanData } from '../interfaces/IPppLoanData';
import { IJsonCount } from '../interfaces/IJsonCount';

const Data: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {loading, error} = useSelector((state: RootState) => state.ppploanData);
    const [sortModel, setSortModel] = useState<GridSortModel>([]);
    const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });    
    
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ 
      pageSize: 25, page: 0
    });
    
    const [rows, setRows] = useState<IPppLoanData[]>([]);
    
    const[recordCount, setRecordCount] = useState<IJsonCount>({
      count_0: 0
    });

    const columns: GridColDef[] = [
        { field: 'loanrange', headerName: 'Loan Range', width: 150, filterable: true,
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'businessname', headerName: 'Business Name', width: 150, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'address', headerName: 'Street Address', width: 150, sortable: false, filterable: false },
        { field: 'city', headerName: 'City', width: 150, filterable: true,  
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'state', headerName: 'State', width: 100, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'zip', headerName: 'Zipcode', width: 100, filterable: true,  
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'naicscode', headerName: 'NACIS Code', width: 100, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
         },
        { field: 'businesstype', headerName: 'Business Type', width: 100, filterable: true,
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'raceethnicity', headerName: 'Race Ethnicity', width: 100, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'gender', headerName: 'Gender', width: 100, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'veteran', headerName: 'Veteran', width: 100, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'jobsretained', headerName: 'Jobs Retained', width: 100, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'dateapproved',  headerName: 'Date Approved', width: 100, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'lender', headerName: 'Lender', width: 150, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'cd', headerName: 'Congressional District', width: 100, filterable: true, 
          filterOperators: [ { label: '=', value: 'equals', getApplyFilterFn: (filterItem) => { if (!filterItem.value || filterItem.value.length === 0) { return null; } return (params) => { return params.value === filterItem.value; }; }, InputComponent: (props) => <input type="text" {...props} /> }]
        },
        { field: 'geocoded_column', headerName: 'ID', width: 350, sortable: false, filterable: false},
      ];
  
      /*
      useEffect(() => {
         //Fetch datga for the current page and pageSize
         dispatch(fetchPaginatedData({page: paginationModel.page, pageSize: paginationModel.pageSize}));
      }, [paginationModel.page, paginationModel.pageSize, dispatch]);

      useEffect(()=> {
        console.log("Updated Recordcount: " + recordCount.count_0)
      },[recordCount]);
      */
      const handleSortModelChange = (model: GridSortModel) => 
      {
        console.log('Sort Changed: ',model);
        //program in data fetch with 
      };
      
      const handleFilterModelChange = (model: GridFilterModel) => 
      {
        console.log('Filter Changed: ',model);
      };

      const handlePageChange = (model: GridPaginationModel) => {

        setPaginationModel(model);
        console.log('page: ' + paginationModel.page.toString() + ' and pageSize: ' + paginationModel.pageSize.toString());   
        dispatch(fetchPaginatedData({ page: model.page, pageSize: model.pageSize }))
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
    
      const handleButtonClick = () => {
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
              
            <Button onClick={handleButtonClick} variant="outlined">Get Loan Data</Button>
                <DataGrid 
                style={{color: "black", backgroundColor: "lightgrey"}}
                columns={columns} 
                //rows={JSON.parse(JSON.stringify(ppploanData.jsondata.toString()))} 
                rows={rows}
                paginationMode='server'
                rowCount={recordCount.count_0 | 0}
                paginationModel={paginationModel}
                pagination
                onPaginationModelChange={handlePageChange}
                onSortModelChange={handleSortModelChange}
                onFilterModelChange={handleFilterModelChange}
                getRowId={(row) => `${row.loanrange}-${row.businessname}-${row.address}`} // Specify a unique ID based on
                />
                
            </div>
        </div>
    );
};

export default Data;