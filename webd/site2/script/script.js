$(function(){
    // 메뉴
    $(".nav > ul > li").mouseover(function(){
        $(".nav > ul > li > ul").stop().fadeIn(200);
        $(this).css("text-decoration","underline");
        $("#header .container").addClass("on");
        $("#slider .slider__wrap .slider .text").stop().fadeOut(100);
    })
    $(".nav > ul > li").mouseout(function(){
        $(".nav > ul > li > ul").stop().fadeOut(100);
        $(this).css("text-decoration","none");
        $("#header .container").removeClass("on");
        $("#slider .slider__wrap .slider .text").stop().fadeIn(100);
    })

    // 슬라이드
    let currentIndex = 0;
    const $sliderWrap = $("#slider .slider__wrap");     // 이미지 부모 : 움직이는 영역
    const $slider = $(".slider img");                       // 각가의 이미지
    const $sliderWidth = $slider.width();               // 이미지 가로값
    $sliderWrap.append($slider.first().clone(true));    // 첫번째 이미지 복사 추가

    setInterval(function(){
        currentIndex++;     // 현재 이미지를 1씩 증가
        $sliderWrap.animate({marginLeft: -$sliderWidth * currentIndex}, 600);  
        
        if(currentIndex === $slider.length){
            setTimeout(function(){
                $sliderWrap.animate({marginLeft: 0}, 0);
                currentIndex = 0;
            }, 700);
        }
    }, 3000);
});