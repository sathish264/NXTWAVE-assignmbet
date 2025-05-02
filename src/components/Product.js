import axios from 'axios'
import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Product(){
   const [product, setProduct] =useState([])
    useEffect(()=>{
       const fetchData =async()=>{
          try{
             const response =await axios.get('https://fakestoreapi.com/products')
             setProduct(response.data)
          } catch(err){
              console.log(err)
          }
       }
       fetchData()
    }, [])
   return(
      <div className="container_fluid">
      <div className="grid_container">
          {
             product.map((items)=>(
               <div className="product_card" key={items.id}>
               <img src={items.image}  alt={items.category}  className="product_image" />
               <div className="product_content">
                 <p>{items.title}</p>
                 <p><Link to="/login">
                 Login or Signup
                 </Link></p>
               </div>
             </div>
             ))
          }
      </div>
      </div>
   )
}