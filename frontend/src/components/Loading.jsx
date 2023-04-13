import React from 'react'
import { Grid } from 'react-loader-spinner'

function Loading() {
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Grid
          height="80"
          width="80"
          color="#001a66"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
}

export default Loading