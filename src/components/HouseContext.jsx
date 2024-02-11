import React, {useState, useEffect, createContext} from 'react';

// import data
import {housesData} from '../data'


// create context
 export const HouseContext = createContext()

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [Property, setProperty] = useState('Propertytype (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);




  return <HouseContext.Provider value={{
country,
setCountry,
countries,
Property,
setProperty,
properties,
price,
setPrice,
houses,
loading,


  }}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
