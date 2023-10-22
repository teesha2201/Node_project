import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import Home from '../Component/Home';
import Bollywood from '../Component/Bollywood';
import Technology from '../Component/Technology';
import Hollywood from '../Component/Hollywood';
import Fitness from '../Component/Fitness';
import Food from '../Component/Food';
import Details from '../Component/Details';
import StoreContextApi from './StoreContextApi';

function RouteCompo() {
  const [count, setCount] = useState(false);

  return (
    <>
      <BrowserRouter>
        <StoreContextApi>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Bollywood" element={<Bollywood />} />
            <Route exact path="/Technology" element={<Technology />} />
            <Route exact path="/Hollywood" element={<Hollywood />} />
            <Route exact path="/Fitness" element={<Fitness />} />
            <Route exact path="/Food" element={<Food />} />
            <Route exact path="/details/:id" element={<Details />} />
          </Routes>
        </StoreContextApi>
        
          <nav className="main-nav">
            <section>
              <div className="titleparent">
                <span className="The_title">The</span>
                <h1 className="siren">Siren</h1>
              </div>
              <div
                onClick={() => setCount(!count)}
                className="display"
              >
                <i className={`fa-solid ${count ? 'fa-close' : 'fa-bars'}`}></i>
              </div>
            

            <ul className="navbar-list">
              <li className="list">
                <NavLink className="navlink" to="/">
                  Home
                </NavLink>
              </li>
              <li className="list">
                <NavLink className="navlink" to="/Bollywood">
                  Bollywood
                </NavLink>
              </li>
              <li className="list">
                <NavLink className="navlink" to="/Technology">
                  Technology
                </NavLink>
              </li>
              <li className="list">
                <NavLink className="navlink" to="/Hollywood">
                  Hollywood
                </NavLink>
              </li>
              <li className="list">
                <NavLink className="navlink" to="/Fitness">
                  Fitness
                </NavLink>
              </li>
              <li className="list">
                <NavLink className="navlink" to="/Food">
                  Food
                </NavLink>
              </li>
            </ul>
            </section>

            <div className={count ? 'hambergerlinksShows' : 'hambergerlinksHide'}>
              <ul className="navbar-listResponsive">
                <li className="listres">
                  <NavLink onClick={() => setCount(!count)} to="/" className="navlinkRes">
                    Home
                  </NavLink>
                </li>
                <li className="listres">
                  <NavLink onClick={() => setCount(!count)} to="/Bollywood" className="navlinkRes">
                    Bollywood
                  </NavLink>
                </li>
                <li className="listres">
                  <NavLink onClick={() => setCount(!count)} to="/Hollywood" className="navlinkRes">
                    Hollywood
                  </NavLink>
                </li>
                <li className="listres">
                  <NavLink onClick={() => setCount(!count)} to="/Technology" className="navlinkRes">
                    Technology
                  </NavLink>
                </li>
                <li className="listres">
                  <NavLink onClick={() => setCount(!count)} to="/Fitness" className="navlinkRes">
                    Fitness
                  </NavLink>
                </li>
                <li className="listres">
                  <NavLink onClick={() => setCount(!count)} to="/Food" className="navlinkRes">
                    Food
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
     
      </BrowserRouter>
    </>
  );
}

export default RouteCompo;
