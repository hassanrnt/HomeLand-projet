import React, {useState, useEffect, useContext} from 'react';

// import icons
import {RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
// import headless ul
import {Menu} from '@headlessui/react'

// import house context
import {HouseContext} from './HouseContext';

const PropertyDropdown = () => {
  const {Property, setPropery, properties} = useContext(HouseContext);
  console.log(properties);

 const [isOpen, setIsOpen] = useState(false);
  return <Menu as='div' className='dropdown relative'>
    <Menu.Button
    onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiMapPinLine className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-light'>{property}</div>
        <div className='text-[13px]'>Select your place</div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ) : (
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          )}
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
     {properties.map((property, index) => {
      return (
        <Menu.Item
        onClick={() => setProperty (property) } 
        
        className='cursor-pointer hover: text-violet-700 transition' as='li' key={index}>{property}</Menu.Item>
      )
     })}
    </Menu.Items>
  </Menu>;
};

export default PropertyDropdown;
