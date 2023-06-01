function UnsplashSection(props){
    return (
        <section id="unsplashSection" className={props.attr}>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>추천 이미지</h3>
                    <p>다양한 농구 이미지를 제공하고 있습니다.</p>
                    <a href="/" className="button-blue">자세히 보기</a>
                </div>
                <div className="unsplash__item">
                    <div className="unsplash">
                        <img src="./assets/images/unsplash/unsplash01.png" alt="언스플래쉬1" />
                    </div>
                    <div className="unsplash">
                        <img src="./assets/images/unsplash/unsplash02.png" alt="언스플래쉬2" />
                    </div>
                    <div className="unsplash">
                        <img src="./assets/images/unsplash/unsplash03.png" alt="언스플래쉬3" />
                    </div>
                    <div className="unsplash">
                        <img src="./assets/images/unsplash/unsplash04.png" alt="언스플래쉬4" />
                    </div>
                </div>  
            </div>
        </section>
    );
}

export default UnsplashSection;