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
                        </select>
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
