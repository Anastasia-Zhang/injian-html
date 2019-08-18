$(document).ready(function(){
    SetFixedButtonsAction(); //设置回到顶部动作及微信动画显示
});
function SetFixedButtonsAction(){
    $("#imgBtn-to-top").on("click", function(){
        var _ele = document.documentElement.scrollTop ? document.documentElement : document.body;
        $(_ele).animate({"scroll-top":0},200);
    });
    var $fixedWeixin = $(".fixed-weixin"),
        $weixinPic = $fixedWeixin.find(".weixin-pic");
    $fixedWeixin.on("transitionend", function(){
        if(!$fixedWeixin.hasClass("show")){
            //$weixinPic.css("display", "none");
        }
    });
    $fixedWeixin.hover(
        function(){
            //$weixinPic.css("display", "block");
            $fixedWeixin.addClass("show");
        },
        function(){
            $fixedWeixin.removeClass("show");
        }
    );

}