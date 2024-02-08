import React from 'react';
// import Link
import {Link} from'react-router-dom';
// import logo
import Logo from'../assets/img/logo.svg';
const Header = () => {
  return <header>
    <div className="container mx-auto">
      {/* logo */}
      <Link to='/'>
        <img src={Logo} alt=''/>
      </Link>
    </div>
  </header>;
};

export default Header;
