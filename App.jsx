import {useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarShipCard from './component/StarShipCard'
//import { getAllStarships } from './services/sw-api'
function App() {
  
  
  const [starships, setStarships] = useState([]);
 const fetchStarships= async () =>{
      try{
        const starshipsData =await getAllStarships();
        console.log(starshipsData)
        setStarships(starshipsData);
      } catch(error){
        //Handle Error
      }
      }
    
  useEffect(() => {
    
    fetchStarships();
  }, [])

 const getAllStarships = async()=>{

   try{
    const response = await fetch ('https://swapi.dev/api/starships/');
    const data = await response.json();
    console.log(data.results)
    return data.results; 
   } 
  catch (error) {
    console.error('Error fetching starships:', error);
    throw error;
  }
};
  


  return (
<div>
  <h1>Star Wars Starships</h1>
  {starships.length &&
  starships.map((starship)=>(
    
     <div key={starship.name}  className="starship-card">
      <p>{starship.name}</p>
     </div>
  
))
  }
  </div>
  )

}   

export default App
