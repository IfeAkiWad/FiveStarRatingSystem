import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="flex-container">
            <div >  
                
                    <div>
                        <Link id="five-star-link" to=''>FIVE&#9733;CLOTHING&nbsp;</Link>
                    </div>
                    <div>
                        <Link className='people-links' to=''>Women</Link>
                    </div>
                    <div>
                        <Link className='people-links' to=''>Men</Link>
                    </div>
                    <div>
                        <Link className='people-links' to=''>Kids</Link>
                    </div>
                    <div className='float-right-link'>
                        <Link className="shoppin-bag" to="">
                        {/* <img className="bag" src={ShoppingBag} alt="shopping bag" /> */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
                            xmlns="http://www.w3.org/2000/svg" aria-labelledby="icon-shop-bag-inactive">
                                <title id="icon-shop-bag-inactive">Shopping Bag</title>
                                <path fill-rule="evenodd" clip-rule="evenodd" 
                                d="M7 5C7 2.23858 9.23858 0 12 0C14.7614 0 17 2.23858 17 5H20C20.5523 
                                5 21 5.44772 21 6V22C21 22.5523 20.5523 23 20 23H4C3.44772 23 3 22.5523 
                                3 22V6C3 5.44772 3.44772 5 4 5H7ZM19 21V7H17V9C17 9.55229 16.5523 10 
                                16 10C15.4477 10 15 9.55229 15 9V5C15 3.34315 13.6569 2 12 2C10.3431 2 
                                9 3.34315 9 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 
                                7H9V9C9 9.55229 8.55228 10 8 10C7.44772 10 7 9.55229 7 9V7H5V21H19Z" 
                                fill="black">
                                </path>
                            </svg>
                       </Link>
                    </div>
            
                {/*<Link id="link" to="/clickers"> CLICKERS</Link> 
                <Link id="link" to="/age-calculator"> AGE CALCULATOR</Link> 
                <Link id="link" to='/timer'> TIMER</Link> 
                <Link id="link" to='/clock'> CLOCK</Link> */}
            </div>
    </nav>
    )
}

export default NavBar