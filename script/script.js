(function($){
    const pro1 ={
        init(){
            this.haeder();
            this.section1();
            this.section2();
            this.footer();
            this.modal();
        },
        haeder(){
            $('.menu-btn').on({
                mouseenter(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().slideDown(300);

                    $('.menu-btn').removeClass('on');
                    $(this).addClass('on')
                },
                focus(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().slideDown(300);

                    $('.menu-btn').removeClass('on');
                    $(this).addClass('on')  
                }
            })
            $('.col').on({
                mouseleave(){
                    $('.sub').stop().slideUp(200);
                    $('.menu-btn').removeClass('on')
                }
            })
        },
        section1(){
            cnt=0;
            function mainSlide(){
                $('.slide-wrap1').stop().animate({top: `${cnt*-100}%`}, 600, function(){
                    if(cnt>5) cnt=0;
                    $('.slide-wrap1').stop().animate({top: `${cnt*-100}%`}, 0)
                })
            };
            function nextCunt(){
                cnt+=1;
                mainSlide();
            };
            function autoTimer(){
                setInterval(nextCunt,3000)
            };
            autoTimer();
        },
        section2(){
            let s2=0;
            let setid;
            $('.usre-btn').on({
                click(){
                    $('.notice-btn').addClass('on')
                    $('.usre-btn').addClass('on')
                    $('.usre-box').show();
                    $('.notice-box').hide();
                }
            })
            $('.notice-btn').on({
                click(){
                    $('.notice-btn').removeClass('on')
                    $('.usre-btn').removeClass('on')
                    $('.usre-box').hide();
                    $('.notice-box').show();
                },
            })
            function mainSlide2(){
                $('.slide-wrap2').stop().animate({left: `${s2*-400}px`}, 600, function(){
                    if(s2>9) s2=0;
                    if(s2<0) s2=9;
                    $('.slide-wrap2').stop().animate({left: `${s2*-400}px`}, 0)
                })
            };
            function nextCunt2(){
                s2+=1;
                mainSlide2();
            };
            function prveCunt2(){
                s2-=1;
                mainSlide2();
            };
            function autoTimer2(){
                setid=setInterval(nextCunt2,6000)
            };
            autoTimer2();
            $('.next-btn').on({
                click(){
                    nextCunt2();
                    clearInterval(setid);
                    autoTimer2();
                }
            })
            $('.prve-btn').on({
                click(){
                    prveCunt2();
                    clearInterval(setid);
                    autoTimer2();
                }
            })
        },
        footer(){
            console.log('3')
        },
        modal(){
            $('.notice1').on({
                click(){
                    $('.modal').addClass('open')
                    $('.modal').removeClass('close')
                }
            })
            $('.close-btn').on({
                click(){
                    $('.modal').removeClass('open')
                    $('.modal').addClass('close')
                }
            })
        }
    }
    pro1.init();
})(jQuery)