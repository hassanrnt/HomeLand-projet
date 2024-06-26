import React, {useState, useEffect, createContext} from 'react';

// import data
import {housesData} from '../data'


// create context
export const HouseContext = createContext()

const HouseContextProvider = ({children}) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("lieu (tous)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Type de propriété (tous)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Fourchette de prix (tous)');
  const [loading, setLoading] = useState(false);

  // return all countries 
  useEffect(()=> {
    const allCountries = houses.map((House) => {
      return House.country;
    });
    // remove duplicates
    const uniqueCountries = ['lieu (tous)' , ...new Set(allCountries)]
    // set countries state
    setCountries(uniqueCountries)
  }, []);

   // return all properties
  useEffect(()=> {
    const allProperties = houses.map((House) => {
      return House.type;
    });
    // remove duplicates
    const uniqueProperties = ['Type de propriété (tous)' , ...new Set(allProperties)]
    // set properties state
    setProperties(uniqueProperties);
  }, []);

const handleClick = ()=>{
  // get loading
  setLoading(true);

  // create a function that the checks if the string includes '(any)'
  const isDefault = (str)=>{
    return str.split(' ').includes('(tous)');
  };
  // get first value of price and parse it to number
  const minPrice = parseInt(price.split(' ')[0]);
  // get second value of price white is the maximum price & parse it to number
  const maxPrice = parseInt(price.split(' ')[2]);

  const newHouses = housesData.filter((house)=>{
    const housePrice = parseInt(house.price);


    // if alt value are selected 
    if (house.country === country && house.type === property && housePrice >= minPrice && housePrice <= maxPrice ) {
      return house;
    }

    // if alt value are default
    if (isDefault(country) && isDefault(property) && isDefault(price)) {
      return house;
    }

    // if country is is not defaoult
    if (!isDefault(country) && isDefault(property)&& isDefault(price)) {
      return house.country === country;
    }

    // if property is not default
    if (!isDefault(property) && isDefault(country) && isDefault(price)) {
      return house.type === property;
    }
    // if price is not default
    if (!isDefault(price) && isDefault(country) && isDefault(property)) {
      if (housePrice>= minPrice && housePrice <= maxPrice){
        return house;
      }
    }

    // if country & property is not default 

    if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
      return house.country === country && house.type === property;
    }
  });

  setTimeout(()=>{
    return newHouses.length < 1 ? setHouses([]) :
    setHouses(newHouses),
    setLoading(false)
  }, 1000);

}


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
handleClick,
loading,


  }}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
