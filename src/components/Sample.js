import {useState} from 'react';
import Product from './Product'
import './Product.css'
export default function Sample(){
    const Info=[
        {
         title:"category",
         details:["Men's", "Women's", "Electronic", "Jewelery"]
       },
       {
         title:'Recommended',
         details:[ "Newest","Low to High", "High to Low"]
       },
       {
         title:'Price',
         details:["0-30", "31-60", "61-100", "101-500","501-1000"]
       }
] 
    const [arrow, setArrow] =useState(null)
    const handleClick=(index)=>{
          setArrow(arrow===index?null:index)
    }
     return(
         <>
          <div className="sample_container">
            <div>
           <div className="accordion sample_container_1" id="faqs" style={{marginTop:'65px'}}>
            {
               Info.map((items, index)=>(
                      <div className='accordion-item border-0 ' key={index}>
                        <div className="accordion-header ">
                            <button className="btn btn-light w-100 ms-auto collapsed d-flex justify-content-between align-items-center" data-bs-target={`#collapse${index}`} data-bs-toggle="collapse"
                            onClick={()=>handleClick(index)}>{items.title} 
                            {
                               (arrow===index)?<span className="bi bi-chevron-compact-down"></span> :<span className="bi bi-chevron-compact-up"></span>
                            }
                           
                            </button>
                        </div>
                        <div className="accordion-collapse collapse" id={`collapse${index}`} data-bs-parent="#faqs">
                         <div className='accordion-body  p-2'>
                            {
                                 items.details.map((p, idx)=>(
                                    <div  key={idx}>
                                    <input type='checkbox' />
                                    <label className='m-2'>{p}</label>
                                    </div>
                                 ))
                            }
                          </div>
                           
                        </div>
                    </div>
                ))
            }
            </div>  
            </div><hr style={{color:'black'}} />
            <Product />
        </div>
         </>
     )
}


