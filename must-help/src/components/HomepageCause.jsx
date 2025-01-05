import React,{useState,useEffect} from 'react'

const HomepageCause = () => {
  const [data, setdata] = useState([]);
  const getData=async()=>{
const res=await fetch('https://fakestoreapi.com/products')
const jsondata=await res.json()
console.log(jsondata,"jsondata");
  }
  
  useEffect(() => {
    
  
    getData()
  }, [])
  
  return (
    <>
    
    HomepageCause
    </>
  )
}

export default HomepageCause