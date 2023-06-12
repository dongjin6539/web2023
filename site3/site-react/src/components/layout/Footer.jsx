import React from 'react'
import { Link } from 'react-router-dom';

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
                  <li><Link to="/" className="ir">페이스북<img src="./assets/images/footer/Facebook.svg" alt="페이스북" /></Link></li>
                  <li><Link to="/" className="ir">인스타그램<img src="./assets/images/footer/Instagram.svg" alt="인스타그램" /></Link></li>
                  <li><Link to="/" className="ir">유튜브<img src="./assets/images/footer/YouTube.svg" alt="유튜브" /></Link></li>
                  <li><Link to="/" className="ir">깃헙<img src="./assets/images/footer/Github.svg" alt="깃헙" /></Link></li>
                  <li><Link to="/" className="ir">티스토리<img src="./assets/images/footer/titstory.svg" alt="티스토리" /></Link></li>
              </ul>
          </div>
          <div className="footer__menu">
              <div>
                  <h4>사이트</h4>
                  <ul>
                      <li><Link to="/">웹표준 사이트</Link></li>
                      <li><Link to="/">반응형 사이트</Link></li>
                      <li><Link to="/">패럴렉스 사이트</Link></li>
                      <li><Link to="/">포트폴리오 사이트</Link></li>
                  </ul>
              </div>
              <div>
                  <h4>유형</h4>
                  <ul>
                      <li><Link to="/">이미지 유형</Link></li>
                      <li><Link to="/">카드 유형</Link></li>
                      <li><Link to="/">이미지/텍스트 유형</Link></li>
                      <li><Link to="/">배너 유형</Link></li>
                      <li><Link to="/">텍스트 유형</Link></li>
                      <li><Link to="/">푸터 유형</Link></li>
                  </ul>
              </div>
              <div>
                  <h4>스크립트</h4>
                  <ul>
                      <li><Link to="/">검색 이펙트</Link></li>
                      <li><Link to="/">퀴즈 이펙트</Link></li>
                      <li><Link to="/">마우스 이펙트</Link></li>
                      <li><Link to="/">슬라이드 이펙트</Link></li>
                      <li><Link to="/">페럴렉스 이펙트</Link></li>
                      <li><Link to="/">게임 이펙트</Link></li>
                  </ul>
              </div>
              <div>
                  <h4>레퍼런스</h4>
                  <ul>
                      <li><Link to="/">CSS</Link></li>
                      <li><Link to="/">FONTS</Link></li>
                      <li><Link to="/">BLOG</Link></li>
                      <li><Link to="/">REFERENCE</Link></li>
                      <li><Link to="/">TUTORIAL</Link></li>
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