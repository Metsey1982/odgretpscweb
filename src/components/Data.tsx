import React, {useState, useEffect} from 'react';
import '../styles/bulma.css';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { RootState, AppDispatch } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData,fetchPaginatedData } from '../store/thunks/ppploanThunk';
import Button from '@mui/material/Button';
import { IPppLoanData } from '../interfaces/IPppLoanData';
import { IJsonCount } from '../interfaces/IJsonCount';

const Data: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {loading, error} = useSelector((state: RootState) => state.ppploanData);
    //console.log("IOuterJsonObject: " + ppploanData)
    //console.log("IOuterJsonObject.jsondata: " + ppploanData.jsondata.toString());
    //console.log("IOuterJsonObject.jsonCount: " + ppploanData.jsonCount.toString());   
    //const parsedJsonData: IPppLoanData[] = JSON.parse(ppploanData.jsondata);
    //const parsedJsonCount: IJsonCount[] = JSON.parse(ppploanData.jsonCount);
    //const [rows, setRows] = useState<IPppLoanData[]>([]);
    
    // State for pagination 
    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({ 
      pageSize: 25, page: 0
    });

    // State for rows 
    const [rows, setRows] = useState<IPppLoanData[]>([]);

    // State for count
    const[recordCount, setRecordCount] = useState<IJsonCount>({
      count_0: 0
    });

    const columns: GridColDef[] = [
        { field: 'loanrange', headerName: 'Loan Range', width: 150 },
        { field: 'businessname', headerName: 'Business Name', width: 150 },
        { field: 'address', headerName: 'Street Address', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'state', headerName: 'State', width: 100 },
        { field: 'zip', headerName: 'Zipcode', width: 100 },
        { field: 'naicscode', headerName: 'NACIS Code', width: 100 },
        { field: 'businesstype', headerName: 'Business Type', width: 100 },
        { field: 'raceethnicity', headerName: 'Race Ethnicity', width: 100 },
        { field: 'gender', headerName: 'Gender', width: 100 },
        { field: 'veteran', headerName: 'Veteran', width: 100 },
        { field: 'jobsretained', headerName: 'Jobs Retained', width: 100 },
        { field: 'dateap const parsedJsonData: IPppLoanData[] = JSON.parse(ppploanData.jsondata);proved', headerName: 'Date Approved', width: 100 },
        { field: 'lender', headerName: 'Lender', width: 150 },
        { field: 'cd', headerName: 'Congressional District', width: 100 },
        { field: 'geocoded_column', headerName: 'ID', width: 350 },
      ];
  
      useEffect(() => {
         //Fetch datga for the current page and pageSize
         dispatch(fetchPaginatedData({page: paginationModel.page, pageSize: paginationModel.pageSize}));
      }, [paginationModel.page, paginationModel.pageSize, dispatch]);

      useEffect(()=> {
        console.log("Updated Recordcount: " + recordCount.count_0)
      },[recordCount]);

     
      /*const handlePageChange = (model: GridPaginationModel) => {
        setPaginationModel(model);
        console.log('page: ' + paginationModel.page.toString() + ' and pageSize: ' + paginationModel.pageSize.toString());   
      }*/
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
                getRowId={(row) => `${row.loanrange}-${row.businessname}-${row.address}`} // Specify a unique ID based on
                />
                
            </div>
        </div>
    );
};

export default Data;