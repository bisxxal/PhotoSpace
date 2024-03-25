import { useEffect, useState } from 'react'
import { API_KEY ,URL } from './data'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import { BrowserRouter as Router ,Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Saved from './components/Saved'
import Loader from './components/Loader'
function App() {
  const [images, setimages] = useState([]);;
 const [input , setInput] = useState('Business');
 const [loder , setLoader] = useState(true)
useEffect(() => {
  const fetchImage = async () => {
   
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${input}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      setimages(res.data.photos);  

      setLoader(false)
     
      // console.log(images);
      // console.log(input);
  };
if(input !== undefined){
  fetchImage();

}
}, [input]);

  return (
    <>
    <Router>
      <Navbar setInput={setInput}/>
{/* <Loader/> */}
    <Routes>
              <Route path='/' element={<Home images={images} loder={loder} />}/>
              <Route path='/saved' element={<Saved/>}/>
    </Routes>


    </Router>
    </>
  )
}

export default App