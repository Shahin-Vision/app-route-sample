"use client"

import { useEffect } from "react"

export default function Footer() {
    useEffect(()=>{
  console.log("Fetch call from useEffect");
    //     fetch("https://fakestoreapi.com/products")
    //     .then((response)=> response.json())
    //     .then((data)=> console.log(data))
    //     .catch((error)=> console.log("Error fetching data :", error))
    },[]);
    
  console.log("Display Footer");

  return <div>Footer</div>
  
}