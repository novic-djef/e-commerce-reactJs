import novic from '../../logo/novic.JPG';
import {Link} from 'react-router-dom';

export default function Navbar ({ cartItem }) {

    window.addEventListener("scroll", function(){
        const search = this.document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })

    return(
        <>
        <section className="search">
        <div className="container c_flex">
            <div className="logo width ">
                <img src={novic} alt='' />
            </div>
            <div className="search-bar f_flex">
                <i className="fa fa-search" ></i>
                <input type="text"  placeholder='effectuez votre recherche ici...'/>
                <span>Categories</span>
                {/* <i className="fa fa-chevron-down"></i> */}
            </div>
            <div className="icon f_flex width">
                <i className="fa fa-user icon_circle"></i>
                <div className="cart">
                <Link to="/cart">
                <i className="fa fa-shopping-cart icon_circle"></i>
                <span> {cartItem.length === 0 ? "" : cartItem.length }</span>
                </Link>
                </div>
            </div>
        </div>

    </section>
        </>
    )
}