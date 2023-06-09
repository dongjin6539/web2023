import React from 'react';
import { Link } from 'react-router-dom';

const memberTitle = {
    title: '레전드 선수',
    desc: '레전드 선수를 소개합니다.'
}
const memberText = [
    {
        img: './assets/images/member/member01.png',
        title: '마이클 조던',
        link: '경력 보기'
    },
    {
        img: './assets/images/member/member02.png',
        title: '코비 브라이언트',
        link: '경력 보기'
    },
    {
        img: './assets/images/member/member03.png',
        title: '르브론 제임스',
        link: '경력 보기'
    },
]
 
function MemberDesc({img, title, link}){
    return (
        <div className="member">
            <figure className="member__header">
                <img src={img} alt={title} />
            </figure>
            <div className="member__body">
                <h4>{title}</h4>
                <Link to="/member">{link}</Link>
            </div>
        </div>
    )
}

function MemberSection(props){
    return (
        <section id="memberSection" className={props.attr}>
            <h3>{memberTitle.title}</h3>
            <p>{memberTitle.desc}</p>
            <div className="member__inner container">
                {memberText.map((text, index) => (
                    <MemberDesc 
                        key = {index}
                        img = {text.img}
                        title = {text.title}
                        link = {text.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default MemberSection;