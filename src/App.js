import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './pages/aboutUs';
import Contact from './pages/contact';
import Home from './pages/home';
import Menu from './pages/menu';
import PlaceDetail from './pages/placeDetail';
import BookingHistory from "./pages/bookingHistory";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDropDownMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isMenuOpen){
        setIsMenuOpen(false);
      }
    }
    window.addEventListener('resize', hideMenu);
    
    return () => {
      window.removeEventListener('resize', hideMenu);
    }

  })

  return (
    <>
      <Navbar toggleDropDownMenu={toggleDropDownMenu}/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about_us' component={AboutUs}/>
        <Route path='/menu' component={Menu}/>
        <Route path='/contact' component={Contact} />
        <Route path='/place_detail' component={PlaceDetail}/>
        <Route path='/booking_history' component={BookingHistory}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
