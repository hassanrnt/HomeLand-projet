import React from 'react';

// import data 
import { housesData } from '../data';

// import use params
import {useParams} from 'react-router-dom';

// import icons
import {BiBed, BiBath, BiArea} from 'react-icons/bi';

// import link
import { Link } from 'react-router-dom';


const PropertyDetails = () => {

  // get the house id
  const {id} = useParams ();
  console.log(id);
  return <div>PropertyDetails</div>;
};

export default PropertyDetails;
