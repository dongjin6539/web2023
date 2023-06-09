import React from 'react';
import { Link } from 'react-router-dom';

const unsplashTitle = {
    title: '추천 이미지',
    desc: '다양한 농구 이미지를 제공하고 있습니다.'
}

const unsplashText = [
    {
        img: './assets/images/unsplash/unsplash01.png',
        title: '농구 이미지'
    },
    {
        img: './assets/images/unsplash/unsplash02.png',
        title: '농구 이미지'
    },
    {
        img: './assets/images/unsplash/unsplash03.png',
        title: '농구 이미지'
    },
    {
        img: './assets/images/unsplash/unsplash04.png',
        title: '농구 이미지'
    }
]

function UnsplashDesc({img, title}){
    return (
        <div className="unsplash">
            <img src={img} alt={title} />
        </div>
    )
}

function UnsplashSection(props){
    return (
        <section id="unsplashSection" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>{unsplashTitle.title}</h3>
                    <p>{unsplashTitle.desc}</p>
                    <Link to="/unsplash" className="button-blue">자세히 보기</Link>
                </div>
                <div className="unsplash__item">
                    {unsplashText.map((text, index) => (
                        <UnsplashDesc 
                            key = {index}
                            img = {text.img}
                            title = {text.title}
                        />
                    ))}
                    
                </div>  
            </div>
        </section>
    );
}

export default UnsplashSection;