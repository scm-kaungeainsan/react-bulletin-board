import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';


const loading = (props) => {
  console.log('loading', props); return (
    <div>
      <div>
        <Backdrop
          sx={{ color: 'primary', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={props.open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  )
};

export default loading;