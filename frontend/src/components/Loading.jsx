import React from 'react'
import { Grid } from 'react-loader-spinner'

function Loading() {
  return (
    <div style={{marginTop:"25%", marginLeft:"50%"}}>
      <Grid
        height="80"
        width="80"
        color="#167dcc"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loading