
var windowTop=0;//初始话可视区域距离页面顶端的距离
$(window).scroll(function() {
    var scrolls = $(this).scrollTop();//获取当前可视区域距离页面顶端的距离
    if(scrolls>=windowTop){//当scrolls>windowTop时，表示页面在向下滑动
        //需要执行隐藏导航的操作
        if (!$('.more-comment-list-block').hasClass('fadeOutUp')) {
            $('.more-comment-list-block').addClass('animated fadeOutUp');
            $('.more-comment-list-block').removeClass('fadeInDown');
            $('.container').css('margin-top','45px');
        }
        windowTop=scrolls;
    }else{
        //需要执行显示导航动画操作
        if (!$('.more-comment-list-block').hasClass('fadeInDown')) {
            $('.more-comment-list-block').addClass('animated fadeInDown');
            $('.more-comment-list-block').removeClass('fadeOutUp');
            $('.container').css('margin-top','148px');
        }
        windowTop=scrolls;
    }
});

// JavaScript Document

function chinaz(){
    this.init();
}
chinaz.prototype = {
    constructor: chinaz,
    init: function(){
        this._initBackTop();
    },
    _initBackTop: function(){
        var $backTop = this.$backTop = $('<div class="cbbfixed">'+
            '<a class="cweixin cbbtn"">'+
            '<span class="weixin-icon"></span><div></div>'+
            '</a>'+
            '<a class="gotop cbbtn">'+
            '<span class="up-icon"></span>'+
            '</a>'+
            '</div>');
        $('body').append($backTop);

        $backTop.click(function(){
            $("html, body").animate({
                scrollTop: 0
            }, 120);
        });

        var timmer = null;
        $(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
                e = $(window).height();
            0 < d ? $backTop.css("bottom", "10px") : $backTop.css("bottom", "-90px");
            clearTimeout(timmer);
            timmer = setTimeout(function() {
                clearTimeout(timmer)
            },100);
        });
    }

}
var chinaz = new chinaz();


varscrolling = false;
$(window).on('scroll',
    function() {
        if (!scrolling) {
            scrolling = true; (!window.requestAnimationFrame) ? setTimeout(autoHideHeader, 250) : requestAnimationFrame(autoHideHeader);
        }
    });

