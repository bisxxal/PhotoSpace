import React from 'react'
import '../App.css'
import Loader from './Loader'
import { saveAs } from 'file-saver';
function Home({images,loder}) {
  return (
    
   <>
    {loder? <Loader/>:<>
    
    <div className=' w-full min-h-[100vh] mt-[100px]'>
      <div className='gridbox w-full bg-[# 0C131A] flex-col px-[50px]'>

      {images.map((images)=>
      <div key={images.id} className=' w-full pt-3 flex h-auto object-cover justify-center items-center  '>

        <div className='relative parenthover '>
        <div className='hovering   absolute top-0 left-0 '></div>
        <img className='rounded-md object-cover w-full   ' src={images.src.medium} alt={images.photographer} />
      

          <img onClick={()=>saveAs(images.src.medium)} class=' hidden dowllode w-[35px] z-10 bg-[#FFFFFF]  rounded p-1 absolute bottom-3 right-4' src="d2.png" alt="" />

        </div>

      </div>
      )}

</div>
    </div>
      </>}
    
   </>

  )
}

export default Home