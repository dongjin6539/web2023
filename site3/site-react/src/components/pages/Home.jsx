import React from 'react';
import Main from '../layout/Main';

import SliderSection from '../section/SliderSection';
import IntroSection from '../section/IntroSection';
import MemberSection from '../section/MemberSection';
import PortSection from '../section/PortSection';
import YoutubeSection from '../section/YoutubeSection';
import UnsplashSection from '../section/UnsplashSection';
import MovieSection from '../section/MovieSection';

function Home() {
  return (
    <>
      <Main>
        <SliderSection attr={'slider__wrap gmarket5 section'}/>
        <IntroSection attr={'intro__wrap gmarket5 section bg-blue'}/>
        <MemberSection attr={'member__wrap gmarket5 section center'}/>
        <PortSection attr={'port__wrap gmarket5 section center bg-blue'}/>
        <YoutubeSection attr={'youtube__wrap gmarket5 section'}/>
        <UnsplashSection attr={'unsplash__wrap gmarket5 section bg-blue'}/>
        <MovieSection attr={'movie__wrap gmarket5 section'}/>
      </Main>
    </>
  );
}
export default Home;