import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ColumnsGrid from './Grid';

export default function SimplePaper() {
  return (
    <>
     <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 228,
          height: 128,
          display: 'flex',
          alignItems: 'center',  
          justifyContent: 'flex-start', 
          padding: 2,
          marginTop: '100px',
          marginLeft: '30px'
        },
      }}
    >
      <Paper elevation={3} sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
        <IconButton color="primary" sx={{ mr: 2 }}> 
          <ShoppingCartIcon sx={{fontSize: '30px'}} />
        </IconButton>
        <Box>
          <Typography variant="h6" sx={{fontSize: '20px'}}>Orders</Typography>
          <Typography variant="body2" sx={{fontSize: '30px'}}>2.328</Typography>
        </Box>
      </Paper>
      <Paper elevation={2} sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
        <IconButton color="secondary" sx={{ mr: 2 }}>
          <InventoryIcon sx={{fontSize: '30px'}} />
        </IconButton>
        <Box>
          <Typography variant="h6" sx={{fontSize: '20px'}}>Inventory</Typography>
          <Typography variant="body2" sx={{fontSize: '30px'}}>100</Typography>
        </Box>
      </Paper>
      <Paper elevation={4} sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
        <IconButton color="success" sx={{ mr: 2 }}>
          <GroupIcon sx={{fontSize: '30px'}} />
        </IconButton>
        <Box>
          <Typography variant="h6" sx={{fontSize: '20px'}}>Customers</Typography>
          <Typography variant="body2" sx={{fontSize: '30px'}}>100</Typography>
        </Box>
      </Paper>
    </Box>
      <Box sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center', width: '100%', mt:4}}>
      <ColumnsGrid />
    </Box>
    </>
   
  );
}
