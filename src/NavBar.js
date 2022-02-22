import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav">
            {/* <button class="dropbtn">Menu</button> */}
            <div>  
                <Link id="five-star-link" to=''>FIVE&#9733;CLOTHING</Link> 
                <Link className="shoppin-bag" to=""><div className="bag-icon">&#128717;</div> Bag</Link>
                {/*<Link id="link" to="/clickers"> CLICKERS</Link> 
                <Link id="link" to="/age-calculator"> AGE CALCULATOR</Link> 
                <Link id="link" to='/timer'> TIMER</Link> 
                <Link id="link" to='/clock'> CLOCK</Link> */}
            </div>
    </nav>
    )
}

export default NavBar