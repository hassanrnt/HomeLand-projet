import React from 'react';
// import routes and route
import {Routes, Route} from 'react-router-dom';


// import components
import Header from './components/Header';
import Footer from './components/Footer';


// import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import ForgetPassword from './pages/ForgetPassword';

const App = () => {
  return(
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/property/:id' element={<PropertyDetails/>}/>
        <Route path='/login' element={<SignIn />}/>
        <Route path='/registration' element={<Registration />}/>
        <Route path='/password/reset' element={<ForgetPassword />}/>
        
      </Routes>
      <Footer/>
  </div>
  );
};

export default App;
