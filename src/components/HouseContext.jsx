import React, {useState, useEffect, createContext} from 'react';

// import data
import {housesData} from '../data'


// create context
 export const HouseContext = createContext()

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Propertytype (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // return all countries 
  useEffect(()=> {
    const allCountries = houses.map((House) => {
      return House.country;
    });
    // remove duplicates
    const uniqueCountries = ['Location (any)' , ...new Set(allCountries)]
    // set countries state
    setCountries(uniqueCountries)
  }, []);

   // return all properties
   useEffect(()=> {
    const allProperties = houses.map((House) => {
      return House.type;
    });
    // remove duplicates
    const uniqueProperties = ['Location (any)' , ...new Set(allProperties)]
    // set properties state
    setProperties(uniqueProperties);
  }, []);

  return <HouseContext.Provider value={{
country,
setCountry,
countries,
property,
setProperty,
properties,
price,
setPrice,
houses,
loading,


  }}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
