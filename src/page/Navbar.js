import React from 'react'
import './css/Navbar.css'
import Logo from './img/logo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {
  return (
    <>
        <nav className='navbar1'>
                <div  className='Navleft' >
                   <a href='' className='logo' > <img src={Logo} className='Logo' /> </a>
                    <a href='' className='location1'><i class="bi bi-geo-alt"></i><div className='location2'>
                           <p className='deliver'> Delivering to pathardi 414102</p> <b className='loup'>Update location</b>
                        </div></a>
                </div>
                <div className='Navcenter'>
                        <div className='sb'>
                    <form >
                        <select name="cars" id="cars" autofocus>
                            <option value="All" ><b>All</b></option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>import React from 'react'
import './css/Navbar.css'
import Logo from './img/logo.png'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Navbar() {

    
  return (
    <>
        <nav className='navbar1'>
                <div  className='Navleft' >
                   <a href='' className='logo' > <img src={Logo} className='Logo' /> </a>
                    <a href='' className='location1'><i class="bi bi-geo-alt"></i><div className='location2'>
                           <p className='deliver'> Delivering to pathardi 414102</p> <b className='loup'>Update location</b>
                        </div></a>
                </div>
                <div className='Navcenter'>
                        <div className='sb'>
                    <form >
                        <select name="cars" id="cars" >
                                 <option className='sel1' selected="selected" value="search-alias=aps">All</option>
                                 <option className='sel1' value="search-alias=alexa-skills">Alexa Skills</option>
                                 <option className='sel1' value="search-alias=amazon-devices">Amazon Devices</option>
                                 <option className='sel1' value="search-alias=fashion">Amazon Fashion</option>
                                 <option className='sel1' value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
                                 <option className='sel1' value="search-alias=appliances">Appliances</option>
                                 <option className='sel1' value="search-alias=mobile-apps">Apps & Games</option>
                                 <option className='sel1' value="search-alias=audible">Audible Audiobooks</option>
                                 <option className='sel1' value="search-alias=baby">Baby</option>
                                 <option className='sel1' value="search-alias=beauty">Beauty</option>
                                 <option className='sel1' value="search-alias=stripbooks">Books</option>
                                 <option className='sel1' value="search-alias=automotive">Car & Motorbike</option>
                                 <option className='sel1' value="search-alias=apparel">Clothing & Accessories</option>
                                 <option className='sel1' value="search-alias=collectibles">Collectibles</option>
                                 <option className='sel1' value="search-alias=computers">Computers & Accessories</option>
                                 <option className='sel1' value="search-alias=todays-deals">Deals</option>
                                 <option className='sel1' value="search-alias=electronics">Electronics</option>
                                 <option className='sel1' value="search-alias=furniture">Furniture</option>
                                 <option className='sel1' value="search-alias=lawngarden">Garden & Outdoors</option>
                                 <option className='sel1' value="search-alias=gift-cards">Gift Cards</option>
                                 <option className='sel1' value="search-alias=grocery">Grocery & Gourmet Foods</option>
                                 <option className='sel1' value="search-alias=hpc">Health & Personal Care</option>
                                 <option className='sel1' value="search-alias=kitchen">Home & Kitchen</option>
                                 <option className='sel1' value="search-alias=industrial">Industrial & Scientific</option>
                                 <option className='sel1' value="search-alias=jewelry">Jewellery</option>
                                 <option className='sel1' value="search-alias=digital-text">Kindle Store</option>
                                 <option className='sel1' value="search-alias=luggage">Luggage & Bags</option>
                                 <option className='sel1' value="search-alias=luxury-beauty">Luxury Beauty</option>
                                 <option className='sel1' value="search-alias=dvd">Movies & TV Shows</option>
                                 <option className='sel1' value="search-alias=digital-music">MP3 Music</option>
                                 <option className='sel1' value="search-alias=popular">Music</option>
                                 <option className='sel1' value="search-alias=mi">Musical Instruments</option>
                                 <option className='sel1' value="search-alias=office-products">Office Products</option>
                                 <option className='sel1' value="search-alias=pets">Pet Supplies</option>
                                 <option className='sel1' value="search-alias=instant-video">Prime Video</option>
                                 <option className='sel1' value="search-alias=shoes">Shoes & Handbags</option>
                                 <option className='sel1' value="search-alias=software">Software</option>
                                 <option className='sel1' value="search-alias=sporting">Sports, Fitness & Outdoors</option>
                                 <option className='sel1' value="search-alias=specialty-aps-sns">Subscribe & Save</option>
                                 <option className='sel1' value="search-alias=home-improvement">Tools & Home Improvement</option>
                                 <option className='sel1' value="search-alias=toys">Toys & Games</option>
                                 <option className='sel1' value="search-alias=under-ten-dollars">Under ₹500</option>
                                 <option className='sel1' value="search-alias=videogames">Video Games</option>
                                 <option className='sel1' value="search-alias=watches">Watches</option>
                          </select>
                                                 {/* <select class="" aria-label="Default select example">
                          <option selected>Open this select </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select> */}
                        <input type='text' className='searchbar' placeholder='Search Amazon.in'/>
                        <button className='search'><i className='bi bi-search size'></i></button>
                    </form>
                        </div>
                </div>
                <div className='Navright'>
                    <div className='lang'>
                            <img  className='fla'/>
                            <div className='eng'>En</div>
                    </div>
                    <a className='sinup'>
                         <div className='accountlist'>
                            Hello Sing in <br/>
                            <b>Account & Lists</b>
                         </div>
                        
                    </a>

                </div>
        </nav>
        
        <nav className='navbar2'>

        </nav>
    </>
  )
}

                        <input type='text' className='searchbar' placeholder='Search Amazon.in'/>
                        <button className='search'><i className='bi bi-search size'></i></button>
                    </form>
                        </div>
                </div>
                <div className='Navright'>
                    <div className='lang'>
                    
                    </div>
                    <a className='sinup'>
                         <div className='accountlist'>
                            Hello Sing in <br/>
                            <b>Account & Lists</b>
                         </div>
                    </a>

                </div>
        </nav>
        
        <nav className='navbar2'>

        </nav>
    </>
  )
}
