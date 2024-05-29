import React , {useContext}from 'react';

// import context
import {HouseContext} from './HouseContext';

// import components 
import House from './House';

// import Link
import {Link} from 'react-router-dom';
// import icons
import {ImSpinner2} from 'react-icons/im';
const {Houses, loading} = useContext(HouseContext);
console.log(Houses)

const HouseList = () => {
  return <div>HouseList</div>;
};

export default HouseList;
