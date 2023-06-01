import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Main from './components/layout/Main.jsx';

import SliderSection from './components/section/SliderSection.jsx';
import IntroSection from './components/section/IntroSection.jsx';
import MemberSection from './components/section/MemberSection.jsx';
import PortSection from './components/section/PortSection.jsx';
import YoutubeSection from './components/section/YoutubeSection.jsx';
import UnsplashSection from './components/section/UnsplashSection.jsx';
import MovieSection from './components/section/MovieSection.jsx';

function App() {
  return (
    <>
      <Header attr={["header__wrap", "gmarket5", "bg-blue"]}/>
      <Main>
        <SliderSection attr={'slider__wrap gmarket5 section'}/>
        <IntroSection attr={'intro__wrap gmarket5 section bg-blue'}/>
        <MemberSection attr={'member__wrap gmarket5 section center'}/>
        <PortSection attr={'port__wrap gmarket5 section center bg-blue'}/>
        <YoutubeSection attr={'youtube__wrap gmarket5 section'}/>
        <UnsplashSection attr={'unsplash__wrap gmarket5 section bg-blue'}/>
        <MovieSection attr={'movie__wrap gmarket5 section'}/>
      </Main>
      <Footer attr={'footer__wrap gmarket5 section'}/>
    </>
  );
}

export default App;