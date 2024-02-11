import React, {useState, useEffect, createContext} from 'react';

// import data
import {housesData} from '../data'


// create context
 export const HouseContext = createContext()

const HouseContextProvider = ({children}) => {
  return <HouseContext.Provider value={''}>{children}</HouseContext.Provider>;
};

export default HouseContextProvider;
