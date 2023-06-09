import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Member from './components/pages/Member';
import Port from './components/pages/Port';
import Youtube from './components/pages/Youtube';
import Unplash from './components/pages/Unplash';
import Movie from './components/pages/Movie';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header attr={'header__wrap gmarket5 bg-blue'} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/port" element={<Port />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/unplash" element={<Unplash />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
        <Footer attr={'footer__wrap gmarket5 section'} />
      </BrowserRouter>
    </>
  );
}

export default App;