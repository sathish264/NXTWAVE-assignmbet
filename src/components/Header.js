import './Product.css'
import {useState} from 'react';
export default function Header(){
    const [showMenu, setShowMenu] =useState(false)
    const handleMenu =()=>{
         setShowMenu(!showMenu)
    }
  
     return(
        <header>
         <div className='header_container'>
            <div className="header_nav">
               <i  className="bi bi-list hamburger" onClick={handleMenu}></i>
                 <h4 >Shopping</h4>
            </div> 
            { showMenu &&
                <ul className="header_nav_item mobile_nav show">
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
                
            }
            <ul className="header_nav_item desktop-nav">
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
                
            <div className="header_nav_icons">
                <span className="bi bi-heart"></span> 
                <span className="bi bi-search"></span> 
                <span className="bi bi-person"></span>
            </div>
         </div>
        </header>
     )
}