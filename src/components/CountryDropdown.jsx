import React, {useState, useEffect, useContext} from 'react';

// import icons
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
// import headless ul
import {Menu} from '@headlessui/react'

// import house context
import {HouseContext} from './HouseContext';

const CountryDropdown = () => {
  const {country, setCountry, countries} = useContext(HouseContext);

 const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div' className='dropdown relative'>
    <Menu.Button className='dropdown-btn'>
      <RiMapPinLine className='dropdown-icon-primary'/>
      <div>
        <div>{country}</div>
        <div>Select your place</div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-primary'/>
          ) : (
            <RiArrowUpSLine className='dropdown-icon-primary'/>
          )
        }
      </div>
    </Menu.Button>
  </Menu>;
};

export default CountryDropdown;
