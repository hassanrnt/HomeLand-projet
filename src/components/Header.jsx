import React from 'react';
// import Link
import {Link} from'react-router-dom';
// import logo
import Logo from'../assets/img/logo.svg';
const Header = () => {
  return <header className='py-6 mb-12 border-b'>
    <div className="container mx-auto flex">
      {/* logo */}
      <Link to='/'>
        <img src={Logo} alt=''/>
      </Link>
      {/* buttons */}
      <div>
        <Link to=''>Sign in</Link>
        <Link to=''>Sign up</Link>
      </div>
    </div>
  </header>;
};

export default Header;
