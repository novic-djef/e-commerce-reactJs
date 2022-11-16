import {useState} from "react";
import { Link } from "react-router-dom";
 

export default function Menu(){
    const [MobileMenu, setMobileMenu] = useState(false);
    return(
        <>
        <header className='header'>
        <div className='container d_flex'>
          <div className='category d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>
                   <div className="navLink">
                    <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize" } onClick={() => setMobileMenu(false)}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/details">details</Link></li>
                        <li><Link to="/user">user</Link></li>
                        <li><Link to="/vendor">vendor</Link></li>
                        <li><Link to="/track">track</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                        <li><Link to="/admin">Admin</Link></li>
                    </ul>
                  <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                    {
                    MobileMenu ? <i className="fa fa-remove close home-bth"></i> : 
                    <i className="fa fa-reorder open"></i>  
                    }
                  </button>
               {/* <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button> */}
                   </div>
                </div>
        </header>
        </>
    )
}