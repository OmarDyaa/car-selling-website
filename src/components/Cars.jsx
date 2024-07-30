import React from 'react'
import CarCard from "./CarCard"

const Cars = ({ cars }) => {

  return (
    <>
    {cars.length > 0 ? 
      <div className='w-11/12 md:w5/5 m-auto'>  
      <div className='py-10 grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8'>
        {cars.map((car)=>(
          <CarCard key={car.id} car={car}/>
        ))}
      </div>
      <div className='w-full flex justify-center py-10'>
        <button className='px-8 py-3 rounded-xl text-indigo-600 font-semibold border-2 border-indigo-600 ' >Load More</button>
      </div>
    </div>
    :<div className='w-full flex justify-center py-20'>
      <h2 className="text-3xl">There is no car matches this filter </h2>
    
  </div>
  }
    
  </>
      
  )
}

export default Cars
