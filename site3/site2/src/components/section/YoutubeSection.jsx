function YoutubeSection(props){
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>추천 유튜브 영상</h3>
                    <p>유튜브를 통해 다양한 농구 영상을 볼 수 있습니다.<br />
                    구독과 좋아요! 부탁드립니다.</p>
                    <a href="/" className="button-green">자세히 보기</a>
                </div>
                <div className="youtube__item">
                    <div className="youtube">
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/QsCB9Ci9J7Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="youtube">
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/R7u1qlHO-cQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="youtube">
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/DbuVTHUJWFk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="youtube">
                        <iframe width="400" height="250" src="https://www.youtube.com/embed/49Z-OGD7D6k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>  
            </div>
        </section>
    );
}

export default YoutubeSection;