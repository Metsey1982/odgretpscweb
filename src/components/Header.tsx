import React from 'react';

import { Box, Stack} from '@mui/material';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { useGlobalSortState } from '../contexts/GlobalStateSortContext';

const Header: React.FC = () => {
    const {globalArray} = useGlobalState();
    const {globalSortArray} = useGlobalSortState();
    console.log('globalArray.length: ', globalArray.length.toString());
    console.log('globalSortArray.length: ', globalSortArray.length.toString());
    let gaLength:number = globalArray.length;
    let gsaLength:number = globalSortArray.length;
    return (

  
            <div>
                <Stack sx={{ alignItems: "center",backgroundColor: '#5dade2'}}>
                    <h2 className="title is-4" style={{color: "black"}}> PPP Loans Provided for New Jersey Businesses</h2>
                    <h3 className="title is-5" style={{color: "black"}}> POC Project Written in React/Typescript & .NET Core 6 Restful API By Mark Turanin</h3>
                </Stack>
                <Stack direction="row" sx={{fontSize: "16px"}}>
                    <Box sx={{  border: "1px solid",borderColor: "lightgrey", width: '50%' }}>

                    <div style={{color: "#76757d",margin: "2px", float:"left"}}><b>Filter By:</b></div>

                    {globalArray.map((item, index) => (
                        <div style={{ color: "#76757d",margin: "2px", float:"left"}} key={index}> {item.replace("_","=")}
                        {index < gaLength - 1 && <b> And</b>}</div> 
                        ))}
                    </Box>
                    <Box sx={{ border: "1px solid",borderColor: "lightgrey", width: '50%' }}>

                    <div style={{color: "#76757d",margin: "2px", float:"left"}}> <b>Order By:</b> </div>
                    
                    {globalSortArray.map((item, index) => (
                        <div style={{color: "#76757d",margin: "2px", float:"left"}} key={index}>{item.replace("_d"," DESC ")} 
                        {index < gsaLength - 1 && <b> Then By</b>}</div>
                        ))}
                   
                    </Box>
                </Stack>
            </div>



    );
};

export default Header;