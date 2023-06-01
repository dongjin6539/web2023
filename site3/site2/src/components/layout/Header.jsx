function Header(props){
    return (
        <div id="header" className={`${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`} role="heading" aria-level="1">
            <div className="header__inner container">
                <h1 className="header__logo">
                    <a href="/">SDJ <em>site</em></a>
                </h1>
                <nav className="header__nav" role="navigation"> 
                    <ul>
                        <li><a href="#introSection">소개</a></li>
                        <li><a href="#memberSection">레전드 선수</a></li>
                        <li><a href="#portSection">농구 유명인</a></li>
                        <li><a href="#youtubeSection">유튜브</a></li>
                        <li><a href="#unsplashSection">이미지</a></li>
                        <li><a href="#movieSection">영화</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;