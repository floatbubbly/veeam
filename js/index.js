$(function(){
    
    var wdh = $(window).width();
    
    /* nav 選單 */
    $('.navBtn').on('click', function(){
        $('.anchorBox').slideToggle(200)
    })
    
    
    
    
    /* 演講者 */
    var slider = $('.bxslider').bxSlider();
    
    $('.spIntroTxt').css({top:100+'%'})
    $('.slidImg').on('mouseenter', function(){
        $(this).children('.spIntroTxt').css({top:''})
        $(".scrollBox").mCustomScrollbar("destroy");
        $('.scrollBox').mCustomScrollbar({
            axis:"y", // horizontal scrollbar
            theme: "minimal",
            mouseWheel:{ scrollAmount: 60},
            autoDraggerLength: false,
        });
    }).on('mouseleave', function(){
        $(this).children('.spIntroTxt').css({top:100+'%'})
    })
    
//    slider.destroySlider();
//    slider.reloadSlider({
//        minSlides: 3,
//        maxSlides: 3,
//        slideWidth: 383,
//        slideMargin: 10,
//        auto: true,
//        autoHover: true
//    });
    
    
    /* 贊助商 */
    $('.tools').on('click', function(){
       $(this).parent().next('.sponIntro').slideToggle(150) 
    })
    
    
    $(window).resize(function() {
        var wdh_rwd = $(window).width();
        if(wdh_rwd != wdh){
            mq();
            mq02();
        }
        
    });
    mq();
    mq02();
    
    
    function mq02() {
        var query02 = Modernizr.mq('(max-width: 560px)');
       if(query02){
        /* 講者 slide */
        slider.destroySlider();
        slider.reloadSlider({  
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 560,
            slideMargin: 0,
            auto: true,
            autoHover: true
        });
        $(window).one('scroll', function(){
            slider.destroySlider();
            slider.reloadSlider({
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 560,
                slideMargin: 0,
                auto: true,
                autoHover: true 
            })
        })

       }
       
    }
    
    function mq() {
        var query = Modernizr.mq('(max-width: 768px)');        
        if (query) {
            $('.anchorBox').slideUp(0);
            
            /* 講者 slide */
            slider.destroySlider();
            slider.reloadSlider({
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 383,
                slideMargin: 10,
                auto: true,
                autoHover: true
            });
            $(window).one('scroll', function(){
                slider.destroySlider();
                slider.reloadSlider({
                    minSlides: 2,
                    maxSlides: 2,
                    slideWidth: 383,
                    slideMargin: 10,
                    auto: true,
                    autoHover: true 
                })
            })
            
            /* 錨點 */
            $('a.anchor').on('click', function(){
                $('.anchorBox').slideUp(0);
                
                // 讓捲軸用動畫的方式移動到 #header 的 top 位置
                var $anchor = $($(this).attr('href'));
                var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                $body.animate({
                    scrollTop: $anchor.offset().top-120
                }, 600);
                return false;
            });
            
            /* 贊助商 */
            $('.sponsor').off('mouseenter mouseleave')
            $('.sponIntro').slideUp(0);
            
            // JavaScript here
            // 當CSS media query計算的視窗寬度小於769px時執行
             
        } else {
            $('.anchorBox').slideDown(0);
            
            /* 錨點 */
            $('a.anchor').off('click')
            $('a.anchor').on('click', function(){                
                // 讓捲軸用動畫的方式移動到 #header 的 top 位置
                var $anchor = $($(this).attr('href'));
                var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                $body.animate({
                    scrollTop: $anchor.offset().top-120
                }, 600);
                return false;
            });
            
            /* 贊助商 */
            $('.sponsor').on('mouseenter', function(){
                $(this).find('.sponIntro').fadeIn(100)
            }).on('mouseleave', function(){
                $(this).find('.sponIntro').fadeOut(50)
            })
            $(window).one('scroll', function(){
                slider.destroySlider();
                slider.reloadSlider({
                    minSlides: 3,
                    maxSlides: 3,
                    slideWidth: 383,
                    slideMargin: 10,
                    auto: true,
                    autoHover: true 
                })
            })
            /* 講者 slide */
            slider.destroySlider();
            slider.reloadSlider({
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 383,
                slideMargin: 10,
                auto: true,
                autoHover: true
            });
            
            // JavaScript here
            // 當CSS media query計算的視窗寬度大於等於769px時執行
        }
    };
    
});