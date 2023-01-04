import React from 'react';
import '../App.css'
import Menulist from './Menulist';

const Navbar = () => {
    const hello = () => {
        document.getElementById("Menulist").classList.toggle('Menulist');
        document.getElementById("Menulist").classList.toggle("hidden");
    }
    return (
        <div className='navbar'>
            <div className='logo-name'>WebDevRay</div>
            <label for="check" class="bar">
                <input id="check" type="checkbox" onClick={hello}></input>

                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
            </label>
            
        </div>
        
    )
}
export default Navbar;