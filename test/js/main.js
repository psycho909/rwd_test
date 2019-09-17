$(function() {
    var isOpen = false
    var lightbBox = function(html) {
        if (!isOpen) {
            $('body').css('overflow', 'hidden')
            $('body').append("<div class='lightbox'></div>")
            $('.lightbox').append("<div class='lightbox-content'></div>")
            if (html == '' || html == undefined) {
                $('.lightbox-content').html()
            } else {
                $('.lightbox-content').html(html)
            }
            isOpen = true
        } else {
            $('body').css('overflow', 'auto')
            $('.lightbox').remove()
            isOpen = false
        }
    }
    // $.gbox.open('請先完成《活動1. 預約小森生活》',{
    //     addClass:'complete-page1'
    // });
    $('.page1__content__btn-item__bf').on('click', function() {
        var bfNotice = [
            {title: 'STEP.1', img: '', footer: '開啟或下載beanfun! APP'},
            {title: 'STEP.2', img: '', footer: '點擊遊戲'},
            {title: 'STEP.3', img: '', footer: '點擊小森圖示'},
            {title: 'STEP.4', img: '', footer: '獲得更多獎勵!'}
        ]
        var html =
            '<div class="bf-notice__close"><img src="images/lightbox-close.png" alt=""/></div><div class="bf-notice__title">beanfun!預約</div><div class="bf-notice__list-box">{{list}}</div><button class="bf-notice__btn">前往beanfun!</button>'
        var bfNoticeListSTR =
            '<div class="bf-notice__list"><div class="bf-notice__list-title">{{title}}</div><div class="bf-notice__list-img">{{img}}</div><div class="bf-notice__list-footer">{{footer}}</div></div>'
        var bfNoticeListHTML = ''
        for (var i = 0; i < bfNotice.length; i++) {
            bfNoticeListHTML += bfNoticeListSTR
                .replace('{{title}}', bfNotice[i].title)
                .replace('{{img}}', bfNotice[i].img)
                .replace('{{footer}}', bfNotice[i].footer)
        }
        html = html.replace('{{list}}', bfNoticeListHTML)
        lightbBox(html)
    })

    $('.page3__content__lighbox-btn').on('click', function() {
        var slicImg = [
            {img: 'images/slick1.jpg'},
            {img: 'images/slick2.jpg'},
            {img: 'images/slick3.jpg'}
        ]
        var html =
            '<div class="lightbox-slick">{{img}}</div><button class="lightbox-slick__btn">關閉</button>'

        var slickImgStr =
            '<div class="lightbox-slick__item"><img src="{{img}}" alt=""/></div>'
        var slickImgHTML = ''
        for (var i = 0; i < slicImg.length; i++) {
            slickImgHTML += slickImgStr.replace('{{img}}', slicImg[i].img)
        }
        html = html.replace('{{img}}', slickImgHTML)
        lightbBox(html)
        $('.lightbox-slick').slick({
            dots: true,
            infinite: false,
            arrows: true,
            speed: 1000,
            slidesToShow: 1,
            autoplay: true
        })
    })
    $('body').on('click', '.bf-notice__close', function() {
        lightbBox()
    })
    $('body').on('click', '.lightbox-slick__btn', function() {
        lightbBox()
    })

    // var html='<div class="fb-success__close"><img src="images/lightbox-close.png" alt=""/></div><div class="fb-success__role"><img src="images/fb-success-role.png" alt=""/></div><div class="fb-success__title">事前預約成功</div><div class="fb-success__content"><p>請記住預約使用的 Facebooｋ帳號</p><p>於小森生活開服時，需使用相同帳</p><p>號登入才收得到村長的見面禮哦!!</p></div><button class="fb-success__btn">確定</button>';
    // lightbBox(html)
    $("body").on("click",'.fb-success__close,.fb-success__btn',function(){
        lightbBox()
    })
    $('.nav-list').on('click', function() {
        var _target = $(this).attr('data-target')
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
        $('html,body').animate(
            {
                scrollTop: $(_target).offset().top
            },
            600
        )
    })
    $('.top').on('click', function() {
        $('html,body').animate(
            {
                scrollTop: 0
            },
            600
        )
    })

    var clipboard = new ClipboardJS('.reflink-copy')
    clipboard.on('success', function() {
        console.log('SUCCESS')
    })

    // $(window).on('load',function(){
    //     const oHtml=document.getElementsByTagName('html')[0];
    //     const aWidth=oHtml.clientWidth;
    //     if(aWidth <= 750){
    //         oHtml.style.fontSize=16*(aWidth/750)+'px';
    //     }
    // })
    // $(window).on('resize',function(){
    //     const oHtml=document.getElementsByTagName('html')[0];
    //     const aWidth=oHtml.clientWidth;
    //     if(aWidth <= 750){
    //         oHtml.style.fontSize=16*(aWidth/750)+'px';
    //     }
    // })
})
