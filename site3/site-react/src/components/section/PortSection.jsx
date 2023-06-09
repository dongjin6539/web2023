import React from 'react';
import { Link } from 'react-router-dom';

const portTitle = {
    title: '농구 유명인',
    desc: '각 리그 별 농구 유명인입니다.'
}

const portMenu = {
    menu1: 'NBA',
    menu2: 'WNBA',
    menu3: 'KBL',
    menu4: 'WKBL'
}

const portText = [
    {
        portImg: './assets/images/port/port01.png',
        iconImg: './assets/images/port/portMember01.svg',
        title: '마이클 조던',
        desc: 'Michael Jordan'
    },
    {
        portImg: './assets/images/port/port02.png',
        iconImg: './assets/images/port/portMember02.svg',
        title: '르브론 제임스',
        desc: 'Lebron James'
    },
    {
        portImg: './assets/images/port/port03.png',
        iconImg: './assets/images/port/portMember03.svg',
        title: '코비 브라이언트',
        desc: 'Kobe Bryant'
    },
    {
        portImg: './assets/images/port/port04.png',
        iconImg: './assets/images/port/portMember04.svg',
        title: '케빈 듀란트',
        desc: 'Kevin Durant'
    },
    {
        portImg: './assets/images/port/port05.png',
        iconImg: './assets/images/port/portMember05.svg',
        title: '스테판 커리',
        desc: 'Stephen Curry'
    },
    {
        portImg: './assets/images/port/port06.png',
        iconImg: './assets/images/port/portMember06.svg',
        title: '크리스 폴',
        desc: 'Chris Paul'
    }
]

function PortDesc({portImg, iconImg, title, desc}){
    return (
        <div className="port">
            <figure className="port__header">
                <img src={portImg} alt={title} />
            </figure>   
            <div className="port__body">
                <span>
                    <img src={iconImg} alt={title} />
                </span>
                <div>
                    <h4>{title}</h4>
                    <Link to="/port">{desc}</Link>
                </div>
            </div>
        </div>
    )
}

function PortSection(props){
    return (
        <section id="portSection" className={props.attr}>
            <h3>{portTitle.title}</h3>
            <p>{portTitle.desc}</p>
            <div className="port__inner container">
                <div className="port__btn">
                    <button className="active">{portMenu.menu1}</button>
                    <button>{portMenu.menu2}</button>
                    <button>{portMenu.menu3}</button>
                    <button>{portMenu.menu4}</button>
                </div>
                <div className="port__cont">
                    {portText.map((text, index) => (
                        <PortDesc 
                            key = {index}
                            portImg = {text.portImg}
                            iconImg = {text.iconImg}
                            title = {text.title}
                            desc = {text.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortSection;