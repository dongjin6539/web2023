$(function(){
    // 메뉴
    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown();
        $(this).css("backgroundColor", "#8558d8");
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp();
        $(this).css("backgroundColor", "#58339E");
    });

    // 슬라이드
    
    const $sliderWrap = $("#slider .slider__wrap");
    const $slider = $(".slider");
    const $sliderImg = $(".slider img");
    const $sliderHeight = $sliderImg.height();
    console.log($sliderHeight);
    $sliderWrap.append($slider.first().clone(true));

    let currentIndex = 0;
    setInterval(function(){
        currentIndex++;
        
        $sliderWrap.animate({top: -$sliderHeight * currentIndex}, 600);

        console.log(currentIndex);
        if(currentIndex === $slider.length){
            setTimeout(function(){
                $sliderWrap.animate({top: 0}, 0);
                currentIndex = 0;
            });            
        };
    }, 3000);

    // 모달창
    $(".content3 h3").click(function(){
        $(".modal").show();
    })
    $(".modal a").click(function(){
        $(".modal").hide();
    })
});