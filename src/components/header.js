import React from 'react';
import "./header.css"

const Header = () => {
    return(
        <> 
            <div className='header_inclusive'>               
                <div className='logo_content'>
                    <img src='https://img.freepik.com/premium-vector/corona-virus-logo_139161-161.jpg?w=2000' alt=""></img>
                </div>
                <div className='menu_content'>
                    <ul>
                        <li>Menü Nav 1</li>
                        <li>Menü Nav 1</li>                   
                        <li>Menü Nav 1</li>    
                        <li>Menü Nav 1</li>                
                    </ul>
                </div>
            </div>
        
        </>

    )
}
export default Header;