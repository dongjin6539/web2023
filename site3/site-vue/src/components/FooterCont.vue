<template>
    <div id="footer" :class="attr" role="contentinfo">
      <div class="footer__inner container">
          <div class="footer__text">
              <h5>Shin DongJin</h5>
              <p>질문 환영😁<br />
                  궁금한 사항은 메일로 문의주세요!</p>
              <address><router-link to="mailto:dongjin6539@naver.com">dongjin6539@naver.com</router-link></address>
              <ul class="sns">
                  <li><router-link to="/" class="ir">페이스북<img src="@/assets/images/footer/Facebook.svg" alt="페이스북" /></router-link></li>
                  <li><router-link to="/" class="ir">인스타그램<img src="@/assets/images/footer/Instagram.svg" alt="인스타그램" /></router-link></li>
                  <li><router-link to="/" class="ir">유튜브<img src="@/assets/images/footer/YouTube.svg" alt="유튜브" /></router-link></li>
                  <li><router-link to="/" class="ir">깃헙<img src="@/assets/images/footer/Github.svg" alt="깃헙" /></router-link></li>
                  <li><router-link to="/" class="ir">티스토리<img src="@/assets/images/footer/titstory.svg" alt="티스토리" /></router-link></li>
              </ul>
          </div>
          <div class="footer__menu">
              <div>
                  <h4>사이트</h4>
                  <ul>
                      <li><router-link to="/">웹표준 사이트</router-link></li>
                      <li><router-link to="/">반응형 사이트</router-link></li>
                      <li><router-link to="/">패럴렉스 사이트</router-link></li>
                      <li><router-link to="/">포트폴리오 사이트</router-link></li>
                  </ul>
              </div>
              <div>
                  <h4>유형</h4>
                  <ul>
                      <li><router-link to="/">이미지 유형</router-link></li>
                      <li><router-link to="/">카드 유형</router-link></li>
                      <li><router-link to="/">이미지/텍스트 유형</router-link></li>
                      <li><router-link to="/">배너 유형</router-link></li>
                      <li><router-link to="/">텍스트 유형</router-link></li>
                      <li><router-link to="/">푸터 유형</router-link></li>
                  </ul>
              </div>
              <div>
                  <h4>스크립트</h4>
                  <ul>
                      <li><router-link to="/">검색 이펙트</router-link></li>
                      <li><router-link to="/">퀴즈 이펙트</router-link></li>
                      <li><router-link to="/">마우스 이펙트</router-link></li>
                      <li><router-link to="/">슬라이드 이펙트</router-link></li>
                      <li><router-link to="/">페럴렉스 이펙트</router-link></li>
                      <li><router-link to="/">게임 이펙트</router-link></li>
                  </ul>
              </div>
              <div>
                  <h4>레퍼런스</h4>
                  <ul>
                      <li><router-link to="/">CSS</router-link></li>
                      <li><router-link to="/">FONTS</router-link></li>
                      <li><router-link to="/">BLOG</router-link></li>
                      <li><router-link to="/">REFERENCE</router-link></li>
                      <li><router-link to="/">TUTORIAL</router-link></li>
                  </ul>
              </div>
          </div>
          <div class="footer__right">
              Copyright 2022. All Rights Reserved. - Designed by Shin DongJin
          </div>
      </div>
  </div>
</template>

<script>
export default ({
  props: {
    attr: String
  }
})
</script>

<style lang="scss">
@import "../assets/scss/setting/mixins.scss";

.footer__wrap {
    background-color: #e7e7e7;
}
.footer__inner {
    display: flex;
    flex-wrap: wrap;
    .footer__text {
        width: 35%;
        h5 {
            font-size: 18px;
            margin-bottom: 20px;
        }
        p {
            font-weight: 300;
            line-height: 1.6;
        }
        address {
            margin-bottom: 30px;
        }
        .sns {
            display: flex;
            align-items: center;
            li {
                a {
                    display: inline-block;
                    background-color: #e7e7e7;
                    border-radius: 50%;
                    padding: 10px;
                    margin-right: 10px;
                    @include flex-center;
                    img {
                        width: 20px;
                        height: 20px;
                    }
                    &:hover {
                        background-color: #c0c0c0;
                    }
                }
            }
        }
    }
    .footer__menu {
        width: 65%;
        display: flex;
        div {
            width: 25%;
            h4 {
                margin-bottom: 20px;
                font-size: 18px;
            }
            ul {
                li {
                    margin-top: 10px;
                    a {
                        font-weight: 300;
                    }
                }
            }
        }
    }
    .footer__right {
        text-align: center;
        margin-top: 70px;
        width: 100%;
        color: #333;
        font-weight: 300;
    }
}
</style>
