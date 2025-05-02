import './Product.css'
import { FaLinkedin } from "react-icons/fa";
import {useState} from 'react';
import { FaInstagram } from "react-icons/fa6";
export default function Footer(){
    const Info= [
        {
          title:'Metamuse',
          details:["About Us", "Stories", "Artisans", "Boutique","Contact Us", "Eu Compliance Docs"]
        }, 
        {
        title:'QUICKLINKS',
        details:["Orders&Shipping", "Join/Login as a Seller", "Payment & pricing", "Return & Refunds",
            "FAQs", "Privacy Policy", "Terms & Conditions"
        ]
        }
    ]
    const [icon, setIcon] =useState(null)
    let handleIcon =(index)=>{
        setIcon(icon===index? null: index)
    }
     return(
        <div className="footer_container">
            <div className="footer_container_1 mb-3">
                <div className="m-3">
                  <h5>Be The First to Know </h5>
                  <p>Sign up for updates from meta muse</p>
                  <div className="d-flex">
                      <input type="search" placeholder="Enter your email" className="form-control"/>
                      <button className="btn btn-light text-dark ms-1" style={{width:"auto"}}>Subscribe</button>
                  </div>
                 </div>
                 <div style={{lineHeight:1.5}} className="m-3">
                     <h4>Contact Us</h4>
                     <p>+91 6302983615</p>
                     <p>customercare@mettus.com</p>
                     <h4>Currency</h4>
                     <p>.USD</p>
                     <p>Transaction will be completed in Euros and a currency available on  hover.</p>
                 </div> 
            </div>
             <hr className="text-white fs-1" />
            <div className="footer_container_2 d-none d-md-flex justify-content-around">
                 <div className="mb-3">
                       <h5>Metamuse</h5>
                       <ul style={{listStyleType:'none',padding: 0, margin: 0, lineHeight:1.8}}>
                         <li>About Us</li>
                         <li>Stories</li>
                         <li>Artisans</li>
                         <li>Boutique</li>
                         <li>Contact Us</li>
                         <li>Eu Compliance Docs</li>
                       </ul>
                 </div>
                 <div className='mb-3'>
                     <h5>QUICKLINKS</h5>
                     <ul style={{listStyleType:'none',padding: 0, margin: 0, lineHeight:1.8}}>
                        <li>Orders&Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                     </ul>
                 </div>
                 <div style={{padding:0, margin:0}}>
                      <h5>FOLLOWUS</h5>
                      <FaLinkedin  style={{fontSize:'30px'}} className="m-3"/>
                      <FaInstagram  style={{fontSize:'30px'}}/>
                    <div>
                        <h5>metta muse ACCEPTS</h5>
                        <div >
                           <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                           <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
                           <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                        </div>
                    </div>  
                 </div>
            </div>
            <div className="accordion d-md-none" id="faqs">
            {
               Info.map((items, index)=>(
                      <div className='accordion-item m-3  border-0 ' key={index}>
                        <div className="accordion-header ">
                            <button className="btn btn-dark w-100 ms-auto collapsed d-flex justify-content-between align-items-center" data-bs-target={`#collapse${index}`} data-bs-toggle="collapse"
                            onClick={()=>handleIcon(index)}>{items.title} 
                            {
                               (icon===index)?<span className="bi bi-dash fs-2"></span> :<span className="bi bi-plus fs-2"></span>
                            }
                           
                            </button>
                        </div>
                        <div className="accordion-collapse collapse" id={`collapse${index}`} data-bs-parent="#faqs">
                         <div className='accordion-body bg-dark text-white p-2'>
                            {
                                 items.details.map((p, idx)=>(
                                    <p key={idx}>{p}</p>
                                 ))
                            }
                          </div>
                           
                        </div>
                    </div>
                ))
            }
            </div>
            <div style={{padding:0, margin:0, textAlign:'center'}} className="d-sm-none">
                      <h5>FOLLOWUS</h5>
                      <FaLinkedin  style={{fontSize:'30px'}} className="m-3"/>
                      <FaInstagram  style={{fontSize:'30px'}}/>
                    <div>
                        <h5>metta muse ACCEPTS</h5>
                        <div >
                           <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                           <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
                           <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                        </div>
                    </div>  
                 </div>
            <div className="m-3">
             <p className="footer_container_3"> Copyright@2023 mettamuse.All are required</p>
            </div>
        </div>
     )
}