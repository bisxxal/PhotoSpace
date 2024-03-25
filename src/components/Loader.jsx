import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
function Loader() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <ThreeDots
        visible={true}
        height="90"
        width="90"
        color="#D1D5DB"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  )
}

export default Loader