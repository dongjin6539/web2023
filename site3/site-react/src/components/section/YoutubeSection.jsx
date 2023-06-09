import React from 'react';
import { Link } from 'react-router-dom';

const youtubeTitle = {
    title: '추천 유튜브 영상',
    desc: (<p>유튜브를 통해 다양한 농구 영상을 볼 수 있습니다.<br />구독과 좋아요! 부탁드립니다.</p>)
}

const youtubeText = [
    {
        iframe: 'https://www.youtube.com/embed/QsCB9Ci9J7Q'
    },
    {
        iframe: 'https://www.youtube.com/embed/R7u1qlHO-cQ'
    },
    {
        iframe: 'https://www.youtube.com/embed/DbuVTHUJWFk'
    },
    {
        iframe: 'https://www.youtube.com/embed/49Z-OGD7D6k'
    },
]

function YoutubeDesc({iframe}){
    return (
        <div className="youtube">
            <iframe width="400" height="250" src={iframe} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

function YoutubeSection(props){
    return (
        <section id="youtubeSection" className={props.attr}>
            <div className="youtube__inner container">
                <div className="youtube__text">
                    <h3>{youtubeTitle.title}</h3>
                    <>{youtubeTitle.desc}</>
                    <Link to="/youtube" className="button-green">자세히 보기</Link>
                </div>
                <div className="youtube__item">
                    {youtubeText.map((text, index) => (
                        <YoutubeDesc 
                            key = {index}
                            iframe = {text.iframe}
                        />
                    ))}
                </div>  
            </div>
        </section>
    );
}

export default YoutubeSection;