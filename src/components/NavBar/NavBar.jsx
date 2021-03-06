import React from "react";
import './NavBar.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom"; 
import { useStateValue } from "../../DataLayer/StateProvider";
import * as userService from "../../utilities/users-service";
import { auth } from "../../firebase";

function NavBar() {
  const [{ basket, user }, dispatch] = useStateValue();


  function handleLogOut() {
    // userService.logOut();
    // setUser(null);

    if (user) {
      auth.signOut();
    }
  }
 
  return (
    <nav>
      <Link to="/">
        <img 
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          className="header__logo" 
          alt=""
        />
      </Link>
      <div 
        className="header__search">
        <input 
          className="header__searchInput"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        
            {user ?
            <Link to="" onClick={handleLogOut}>
              <div className="header__option">
                  <span className="header__optionLineOne">Hello, {user.name ? user.name : "Guest"}</span>
                  <span className="header__optionLineTwo">Sign Out</span>
              </div>
            </Link>
            :
            <Link to="/login" >
              <div className="header__option">
                  <span className="header__optionLineOne">Hello Guest</span>
                  <span className="header__optionLineTwo">Sign In</span>
              </div>
            </Link>
            }
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
        </div>
      </Link>
      
    </nav>
  )
}

export default NavBar;