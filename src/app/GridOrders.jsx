import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SimpleAreaChart from './Chart2';
import BasicTable from './Table';
import GaugeValueRangeNoSnap from './Gauge';
import BasicLineChart from './Line';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%'  }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
          <Item><SimpleAreaChart/></Item>
        </Grid>
        <Grid size={6} sx={{marginTop:'80px'}}>
          <Item><GaugeValueRangeNoSnap/></Item>
        </Grid>
        <Grid size={6}>
          <Item><BasicTable/></Item>
        </Grid>
        <Grid size={6}>
          <Item><BasicLineChart/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
