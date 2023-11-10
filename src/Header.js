import React from 'react'
import './Header.css';
import wishquire from "./Wishquire_logo.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className='header'>{/*logo in header */}
        <img
        className='header__logo'
        src={wishquire}
        alt='logo'
        />{/*search bar */}
        <div
        className='header__search'
        >
            <input
            className='header__searchInput'
            type="text"
            />
            <SearchIcon
            className='header__searchIcon'
            />
        </div>{/* span is inline version of div div is block*/}
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& orders</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header