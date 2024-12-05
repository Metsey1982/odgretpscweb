import React from 'react';

import { Box, Stack} from '@mui/material';
import { useGlobalState } from '../contexts/GlobalStateContext';
import { useGlobalSortState } from '../contexts/GlobalStateSortContext';

const Header: React.FC = () => {
    const {globalArray} = useGlobalState();
    const {globalSortArray} = useGlobalSortState();
    return (


            <div>
                <Stack sx={{ alignItems: "center" }}>
                    <h1 className="title is-5"> PPP Loans Provided for New Jersey Businesses</h1>
                    <h3 className="title is-6"> POC Project Written in React By Mark Turanin</h3>
                </Stack>
                <Stack direction="row" sx={{fontSize: "14px"}}>
                    <Box sx={{  border: "1px solid",borderColor: "lightgrey", width: '50%' }}>

                    <div style={{width: "90%", margin: "5px"}}><b>Filter By:</b>
    
                    {globalArray.map((item, index) => (
                        <div style={{ margin: "5px"}} key={index}> {item.replace("_","=")} <b>Then By </b> </div>
                        ))}
                    </div>
                    </Box>
                    <Box sx={{ border: "1px solid",borderColor: "lightgrey", width: '50%' }}>

                    <div style={{width: "90%", margin: "5px"}}> <b>Order By:</b> </div>
                    {globalSortArray.map((item, index) => (
                        <div style={{margin: "5px"}} key={index}>{item.replace("_d"," DESC ")} <b>Then By </b> </div>
                        ))}
                    </Box>
                </Stack>
            </div>



    );
};

export default Header;