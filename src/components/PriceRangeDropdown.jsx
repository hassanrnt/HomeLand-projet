import React, {useState, useEffect, useContext} from 'react';

// import icons
import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'
// import headless ul
import {Menu} from '@headlessui/react'

// import house context
import {HouseContext} from './HouseContext';

const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '1000000 - 1300000',
    },
    {
      value: '1300000 - 1600000',
    },
    {
      value: '1600000 - 1900000',
    },
    {
      value: '1900000 - 2200000',
    },
    {
      value: '100000 - 300000',
    },
    {
      value: '300000 - 400000',
    },
  ];

  return <Menu as='div' className='dropdown relative'>
    <Menu.Button
    onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
      <RiWallet3Line className='dropdown-icon-primary'/>
      <div>
        <div className='text-[15px] font-medium leading-light'>{price}</div>
        <div className='text-[13px]'>choose price Range</div>
        </div>
        {
          isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary'/>
          ) : (
            <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )}
    </Menu.Button>

    <Menu.Items className='dropdown-menu'>
     {prices.map((price, index) => {
      return (
        <Menu.Item
        onClick={() => setPrice (price.value) } 
        
        className='cursor-pointer hover: text-violet-700 transition' as='li' key={index}>{price.value}</Menu.Item>
      )
     })}
    </Menu.Items>
  </Menu>;
};

export default PriceRangeDropdown;
