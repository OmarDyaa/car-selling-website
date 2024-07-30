import React ,{useState} from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Cars from '../components/Cars'
import Footer from '../components/Footer'

const Home = ({ cars }) => {
  const [country,setCountry]=useState("");
  const [category,setCategory] = useState("");
  const[vendor,setVendor]=useState("");
  function handleFilterCountry(value){
    setCountry(value)
  }
  function handleFilterCatergory(value){
    setCategory(value)
  }
  function handleFilterVendor(value){
    setVendor(value)
  }

  let filteredCars = cars.filter((car)=>{
    return(country ==="" || car.country=== country) &&(category==="" || car.category===category)  &&( vendor==="" || vendor === car.vendor )
  });

  // ! It isnot right 
    // if(country==="" && category==="")  filteredCars=cars;
    // if(country==="US" && category==="SUV") filteredCars=cars.filter((car)=> car.country==="US") 
    // if(country==="CA") filteredCars=cars.filter((car)=> car.country==="CA") 
    // if(country==="GB") filteredCars=cars.filter((car)=> car.country==="GB") 
  
  
  return (
    <>
      <Navbar/>
      <Search onFilterCountry={handleFilterCountry}  onFilterCategory={handleFilterCatergory} onFilterVendor={handleFilterVendor}/>
      <Cars cars={filteredCars} />
      <Footer/>

    </>
  )
}

export default Home
