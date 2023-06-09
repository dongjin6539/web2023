import React from 'react';
import { Link } from 'react-router-dom';

const moiveTitle = {
    title: '추천 영화',
    desc: '농구를 주제로 한 다양한 영화를 추천드리고 있습니다.'
}

const movieText = [
    {
        img: './assets/images/movie/movie01.png',
        title: '농구 영화'
    },
    {
        img: './assets/images/movie/movie02.png',
        title: '농구 영화'
    },
    {
        img: './assets/images/movie/movie03.png',
        title: '농구 영화'
    },
    {
        img: './assets/images/movie/movie04.png',
        title: '농구 영화'
    },
    {
        img: './assets/images/movie/movie05.png',
        title: '농구 영화'
    },
    {
        img: './assets/images/movie/movie06.png',
        title: '농구 영화'
    },
]

function MovieDesc({img, title}){
    return (
        <div className="movie">
            <img src={img} alt={title} />
        </div>
    )
}

function MovieSection(props){
    return (
        <section id="movieSection" className={props.attr}>
            <div className="movie__inner container">
                <div className="movie__text">
                    <h3>{moiveTitle.title}</h3>
                    <p>{moiveTitle.desc}</p>
                    <Link to="/movie" className="button-red">자세히 보기</Link>
                </div>
                <div className="movie__item">
                    {movieText.map((text, index) => (
                        <MovieDesc 
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

export default MovieSection;