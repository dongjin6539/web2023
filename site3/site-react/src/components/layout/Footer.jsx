import React from 'react'

function Footer(props){
  return (
      <div id="footer" className={props.attr} role="contentinfo">
      <div className="footer__inner container">
          <div className="footer__text">
              <h5>Shin DongJin</h5>
              <p>질문 환영😁<br />
                  궁금한 사항은 메일로 문의주세요!</p>
              <address><a href="mailto:dongjin6539@naver.com">dongjin6539@naver.com</a></address>                    
              <ul className="sns">
                  <li><a href="/" className="ir">페이스북<img src="./assets/images/footer/Facebook.svg" alt="페이스북" /></a></li>
                  <li><a href="/" className="ir">인스타그램<img src="./assets/images/footer/Instagram.svg" alt="인스타그램" /></a></li>
                  <li><a href="/" className="ir">유튜브<img src="./assets/images/footer/YouTube.svg" alt="유튜브" /></a></li>
                  <li><a href="/" className="ir">깃헙<img src="./assets/images/footer/Github.svg" alt="깃헙" /></a></li>
                  <li><a href="/" className="ir">티스토리<img src="./assets/images/footer/titstory.svg" alt="티스토리" /></a></li>
              </ul>
          </div>
          <div className="footer__menu">
              <div>
                  <h4>사이트</h4>
                  <ul>
                      <li><a href="/">웹표준 사이트</a></li>
                      <li><a href="/">반응형 사이트</a></li>
                      <li><a href="/">패럴렉스 사이트</a></li>
                      <li><a href="/">포트폴리오 사이트</a></li>
                  </ul>
              </div>
              <div>
                  <h4>유형</h4>
                  <ul>
                      <li><a href="/">이미지 유형</a></li>
                      <li><a href="/">카드 유형</a></li>
                      <li><a href="/">이미지/텍스트 유형</a></li>
                      <li><a href="/">배너 유형</a></li>
                      <li><a href="/">텍스트 유형</a></li>
                      <li><a href="/">푸터 유형</a></li>
                  </ul>
              </div>
              <div>
                  <h4>스크립트</h4>
                  <ul>
                      <li><a href="/">검색 이펙트</a></li>
                      <li><a href="/">퀴즈 이펙트</a></li>
                      <li><a href="/">마우스 이펙트</a></li>
                      <li><a href="/">슬라이드 이펙트</a></li>
                      <li><a href="/">페럴렉스 이펙트</a></li>
                      <li><a href="/">게임 이펙트</a></li>
                  </ul>
              </div>
              <div>
                  <h4>레퍼런스</h4>
                  <ul>
                      <li><a href="/">CSS</a></li>
                      <li><a href="/">FONTS</a></li>
                      <li><a href="/">BLOG</a></li>
                      <li><a href="/">REFERENCE</a></li>
                      <li><a href="/">TUTORIAL</a></li>
                  </ul>
              </div>
          </div>
          <div className="footer__right">
              Copyright 2022. All Rights Reserved. - Designed by Shin DongJin
          </div>
      </div>
  </div>
  );
}

export default Footer;