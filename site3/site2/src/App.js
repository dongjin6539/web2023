import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/pages/Main';
import Member from './components/pages/Member';
import Port from './components/pages/Port';
import Youtube from './components/pages/Youtube';
import Unplash from './components/pages/Unplash';
import Movie from './components/pages/Movie';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/member" element={<Member />} />
          <Route path="/port" element={<Port />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/unplash" element={<Unplash />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;