import React, { useState, useEffect } from 'react'
import '../styles/Homepage.css';
const HomepageCause = () => {
  const [data, setdata] = useState([]);  // State to hold data
  const getData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const jsondata = await res.json()
    console.log(jsondata, "jsondata");
    setdata(jsondata)
  }

  useEffect(() => {
    getData()
  }, []) // Empty dependency array ensures getData is called only once

  return (
    <>
    <div className='filters'>

         <h1>Our Causes</h1>
    </div>
      <div className='Maincausecontainer'>
        {data.length > 0 ? (
          data.map((el) => (
            <div key={el.id} className='cause-item'>
              <img src={el.image} alt={el.title} />
              <div className='cause-title'>
              <h4>{el.title}</h4>
              <h4>Rs{el.price}/person</h4>

              </div>
            </div>
          ))
        ) : (
          <p>Loading data...</p> // Show loading message while data is fetching
        )}
      </div>
    </>
  )
}

export default HomepageCause
