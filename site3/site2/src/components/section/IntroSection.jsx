function IntroSection(props){
    return (
        <section id="introSection" className={props.attr}>
            <h3 className="blind">농구 튜툐리얼 소개</h3>
            <div className="intro__inner container">
                <div className="intro__title">
                    <span>basketball</span>
                    <h3>농구 입문<br />전문과정</h3>
                    <p>농구를 시작하는 전문 과정입니다.<br />처음 시작하는 분들에게 필요합니다.</p>
                </div>
                <div className="intro__desc">
                    <div>
                        <h4 className="icon-bg1">기본 기술</h4>
                        <p>농구를 잘하기 위해서는 기본적인 농구 기술을 익히는 것이 중요합니다. 드리블, 패스, 샷, 리바운드 등의 기본 기술들을 연습하고 개선해야 합니다. 또한 바른 자세와 테크닉을 익히는 것도 중요합니다.</p>
                    </div>
                    <div>
                        <h4 className="icon-bg2">체력과 유연성</h4>
                        <p>농구는 높은 수준의 체력과 유연성을 요구합니다. 빠른 움직임, 높은 점프, 긴 시간동안의 활동 등을 위해 근력과 유연성을 향상시키는 훈련을 해야 합니다. 스피드, 스태미너, 근력, 유연성을 모두 개발하도록 훈련 프로그램을 구성하는 것이 좋습니다.</p>
                    </div>
                    <div>
                        <h4 className="icon-bg3">게임 이해력</h4>
                        <p>농구는 전략과 팀워크가 중요한 경기입니다. 게임 상황을 잘 이해하고 상황에 맞는 판단과 의사 소통을 할 수 있어야 합니다. 다양한 게임 상황을 경험하고 분석하며 팀원들과의 협업을 통해 게임 이해력을 향상시킬 수 있습니다.</p>
                    </div>
                    <div>
                        <h4 className="icon-bg4">의지와 열정</h4>
                        <p>농구는 경기 중간에 발생하는 실패와 어려움에 대처하는 능력을 요구합니다. 의지와 열정을 가지고 노력하며 꾸준한 훈련과 연습을 통해 개인 기술을 향상시켜야 합니다. 열심히 노력하고 계속해서 도전하는 자세가 중요합니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntroSection;