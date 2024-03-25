import React from 'react'
import '../App.css'
function Navbar({setInput}) {

  
  return (
    <div className='w-full h-[110px] bg-[white] z-20  fixed pb-3 flex top-0 flex-col justify-evenly items-center '>

<div className=' absolute top-[-1px] left-[10px] overflow-hidden'>
    <img className='lg:w-[100px] w-[70px] object-cover  relative' src="space.png" alt="" />
  <h1 className=' absolute top-0 left-[2px] lg:text-[30px] text-[20px] font-bold'>Photo </h1></div>


<div className='my-3    items-center bg-[#EEEEEE] rounded-full flex justify-between relative px-5'>
   
   <input 
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      setInput(e.target.value);
    }
  }} 
  onChange={(e) => setInput()} 
  className=' lg:w-[900px] bg-transparent   text-[#2b2b2b]  h-10 outline-none border-none ' 
  placeholder='Search high-resolution images'  
  type="text" 
/>

<img className=' lg:w-[30px] ml-2 lg:h-[30px] w-[22px] h-[22px]  cursor-pointer filter invert-[4]' onClick={(e) => {
      setInput(e.target.previousSibling.value);
    }} src="ser2.png" alt="" />
</div>

<div className='flex lg:w-[89%] w-full overflow-x-auto flex-nowrap whitespace-nowrap px-7 hidescroll gap-5'>

<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Nature</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Travel</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Spring</div>
 
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>City</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Wallpapper</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>3d Renders</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Car</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Fashion</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Landscape</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Animals</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Tech</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Business</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Street Photography</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Flim</div>
<div onClick={(e)=>setInput(e.target.innerHTML)} className='bg-gray-300 px-4 text-[#5a5757] py-2 rounded-lg cursor-pointer '>Saved</div>

</div>
    </div>
  )
}

export default Navbar