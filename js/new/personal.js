jQuery(document).ready(function($){

    //
    // $("video").hover(function() {
    //      $(this)[0].play();
    // },
    // function() {
    //     $(this)[0].pause();
    // });

    // $(".close-overlay,#masthead").click(function(){
    // 	$(".overlay").fadeOut(400);
    // 	$("html,body").css("overflow","auto");
    // });


    $(".close-c").click(function(){
        $("#cookie-b").addClass("remove");
    });
    $(".titolino-ac").click(function(){
        $(this).closest(".accordion-c").toggleClass("open");
    });

    $(".visualizza-come-elenco").click(function(){
        $("html").toggleClass("elenco");
    });

    $("input.cerca-input").css("text-indent",$(".label-cerca").width());

    $( ".suggerimento" ).mouseenter(function() {
        if($(".suggerimento.attivo").length < 1)
        {
            $(".suggerimenti").html("<span class='sug1'>â€¢ "+$(this).attr("data-label")+"</span>");
        }
    }).mouseleave(function() {
        if($(".suggerimento.attivo").length < 1)
        {
            $(".suggerimenti").html("");
        }
    });

    function suglist()
    {$( ".suggerime-list a" ).off();
        $( ".suggerime-list a" ).mouseenter(function() {
            if($(".suggerimento.attivo").length > 0)
            {
                $(".suggerimenti").append("<span class='sug2'>â€¢ "+$(this).text()+"</span>");
            }
        }).mouseleave(function() {
            if($(".suggerimento.attivo").length > 0)
            {
                $(".sug2").remove();
            }
        });
    }





    $("#cerca").click(function(){

        if($("html").hasClass("mobile") && $("html").hasClass("iphone"))
        {
            window.location.href = $(".search-form").attr("action")+"?s=";
        }
        else
        {
            $("#cookie-b").addClass("remove");
            $(".menuout,.fuori-s,.fuori").removeClass("menuout fuori-s fuori");
            $("html").toggleClass("search-out");
            if($("html").hasClass("search-out"))
            {
                $(".cerca-input").focus();
            }
        }

    });
    $(".close-search").click(function(){
        $("html").removeClass("search-out");
        $(".cerca-input").val("");
        $(".suggerimenti").html("");
        $(".suggerimento.attivo").removeClass("attivo");
        $(".suggerime-list").html("");
        if($("body").hasClass("search"))
        {
            $(".cerca-input").focus();
        }
    });
    $(".cerca-click").click(function(){
        if($(".cerca-input").val())
        {
            $(".search-form input[type='submit']").trigger("click");
        }
    });
    $(".suggerimento").click(function(){
        if($(this).hasClass("attivo"))
        {
            $(this).removeClass("attivo");
            $(".suggerime-list").html("");
            $(".suggerimenti").html("");
        }
        else
        {
            $(".suggerimento.attivo").removeClass("attivo");
            $(this).addClass("attivo");
            $(".suggerimenti").html("<span class='sug1'>â€¢ "+$(this).attr("data-label")+"</span>");
            $(".suggerime-list").html($(" .suggerimento-info",this).html());
            suglist();
        }
    });

    $(".select-label").click(function(){
        $(".select-b").toggleClass("select-attivo");
    });
    $(".select-c div").click(function(){
        $(".select-b").removeClass("select-attivo");
        $(".select-label").text($(this).attr("value"));
        $(".select-label").addClass("valorizzato");
        $("#mce-MMERGE3").val($(this).attr("value"));
    });

    $(".categoria.click-scroll .titolo-cat").click(function(){
        $("html").addClass("filtered-tessuti");
        $(".filtroout").removeClass("filtroout");
        var valores = $(this).text();
        // $("h2.title").each(function(index){
// 			if(valores == $(this).text())
// 				{
// 					$("html, body").animate({ scrollTop: $(this).offset().top - 135 },1000);
// 				}
// 		});
        $(".post-f-i").each(function(index){
            if($(this).attr("data-cat") == valores)
            {
                $(this).css("display","inline-block");
            }
            else
            {
                $(this).css("display","none");
            }
        });
    });

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var anch = getParameterByName('anch');
    if(!anch)
        anch = getParameterByName('idpost');

    $(".read-all").click(function(){
        $(this).parent().addClass("readall");
    });

    var scrolltop=0;
    var noscroll = true;
    if($("body").hasClass("home") && $(".big-image + .big-image").length > 0)
    {
        setTimeout(function(){

            if(noscroll)
            {
                $("html, body").animate({ scrollTop: $(".big-image + .big-image").offset().top - 80 },1000);
            }
        }, 5000);
    }
    $( window ).scroll(function() {
        noscroll = false;



        $(".menuout,.fuori-s,.fuori,.search-out").removeClass("menuout fuori-s fuori search-out");
        scrolltop = $(this).scrollTop();
        $( "video" ).each(function(index){
            if($(this).offset().top < scrolltop + $(window).height()/2 && $(this).offset().top  + $(this).height() > scrolltop)
            {
                $(this)[0].play();
            }
            else
            {
                $(this)[0].pause();
            }
        });

        $(".claim-img").each(function(index){
            if(scrolltop >= $(this).parent().offset().top + $(this).parent().height() - $(window).height()*0.6 - $(this).height())
            {
                $(this).addClass("botblocked");
            }
            else
            {
                $(this).removeClass("botblocked");
            }
            if(scrolltop > $(this).parent().offset().top - 81)
            {
                $(this).addClass("fixed");
            }
            else
            {
                $(this).removeClass("fixed");
            }
        });
    });

    // $( "video" )
// 	  .mouseenter(function() {
// 	    $(this)[0].play();
// 	  })
// 	  .mouseleave(function() {
// 	     $(this)[0].pause();
// 	  });


    $(".title-store-single").click(function(){
        $(this).closest(".container-store").toggleClass("aperto");
    });
    $(".single-store-container-title").click(function(){
        $(this).closest(".single-store-container").toggleClass("aperto1");
    });

    $("#menu").click(function(){
        $("#cookie-b").addClass("remove");
        if($(window).width() > 1024)
        {
            $("body").toggleClass("menuout");
            $(".sub-menu,#third-menu,.search-out").removeClass("fuori fuori-s search-out");
        }
        else
        {
            if($(".sub-menu.fuori-s").length > 0)
            {
                $(".fuori-s").removeClass("fuori-s");
            }
            else
            {
                $("body").toggleClass("menuout");
                $(".sub-menu,#third-menu,.search-out").removeClass("fuori fuori-s search-out");
            }
        }
    });
    var codesto1 = "";
    $(".acc-f").click(function(){
        if($(window).width()<768)
        {
            if($(this).closest(".accordion-f").hasClass("open"))
            {
                $(this).closest(".accordion-f").removeClass("open");
            }
            else
            {
                codesto1 = $(this);
                $(".accordion-f").removeClass("open");
                setTimeout(function(){
                    codesto1.closest(".accordion-f").toggleClass("open");
                }, 800);

            }
        }
        else
        {
            $(this).closest(".accordion-f").toggleClass("open");
        }

    });

    $(".menu-l1").mouseenter(function() {
        if($(window).width() > 1024)
        {

            if($(this).hasClass("attivo-m"))
            {
                $(this).removeClass("attivo-m");
            }
            else
            {
                $(".menu-l1").removeClass("attivo-m");
                $(this).addClass("attivo-m");
            }

            if(!$(".sub-menu").hasClass("fuori-s"))
            {
                $(".sub-menu").addClass("fuori-s");
            }
            $(".sub-menu").html($(" .sub-menu-item",this).html());

            if($(this).hasClass("conthird"))
            {
                if(!$("#third-menu").hasClass("fuori"))
                {
                    $("#third-menu").addClass("fuori");
                }
                $("#inner-third-menu").html($(".third-menu[data-id='m"+$(this).attr("data-class")+"']").html());
            }
            else
            {
                $("#third-menu").removeClass("fuori");
            }
            menuout();
        }
    });


    $(".menu-l1").click(function() {
        if($(window).width() <= 1024)
        {

            if($(this).hasClass("attivo-m"))
            {
                $(this).removeClass("attivo-m");
            }
            else
            {
                $(".menu-l1").removeClass("attivo-m");
                $(this).addClass("attivo-m");
            }

            if(!$(".sub-menu").hasClass("fuori-s"))
            {
                $(".sub-menu").addClass("fuori-s");
            }
            $(".sub-menu").html($(" .sub-menu-item",this).html());

            if($(this).hasClass("conthird"))
            {
                if(!$("#third-menu").hasClass("fuori"))
                {
                    $("#third-menu").addClass("fuori");
                }
                $("#inner-third-menu").html($(".third-menu[data-id='m"+$(this).attr("data-class")+"']").html());
            }
            else
            {
                $("#third-menu").removeClass("fuori");
            }
            menuout();
        }
    });




    function menuout()
    {   $(".conimg,.conboth,.flmc,.context").off();
        $(".conimg").mouseenter(function() {
            $('#third-menu .img-change').attr("src",$(this).attr("data-image"));
        })
            .mouseleave(function() {
                $('#third-menu .img-change').attr("src","");
            });
        $(".conboth").mouseenter(function() {
            $('#third-menu .img-change').attr("src",$(this).attr("data-image"));
            $('#third-menu .center-t-m').html($(" .texto-cat",this).html());
        })
            .mouseleave(function() {

            });
        $(".context").mouseenter(function() {
            $('#third-menu .center-t-m').html($(" .texto-cat",this).html());
        })
            .mouseleave(function() {

            });

        $(".flmc").mouseenter(function() {

            $(".flmc").removeClass("attivo");
            $(this).addClass("attivo");
            $(".center-t-m")
            if($("#third-menu").hasClass("fuori"))
            {
                if($(".third-menu[data-id='"+$(this).attr("data-id")+"']").length > 0)
                    $("#inner-third-menu").html($(".third-menu[data-id='"+$(this).attr("data-id")+"']").html());
            }
            else
            {
                if($(".third-menu[data-id='"+$(this).attr("data-id")+"']").length > 0)
                {
                    $("#third-menu").addClass("fuori");
                    $("#inner-third-menu").html($(".third-menu[data-id='"+$(this).attr("data-id")+"']").html());
                }
            }
            menuout();
            return false;
        });
    }



    $("#backtotop").click(function(){
        $("html, body").animate({ scrollTop: 0 },1000);
    });
    $("span.lang-current").click(function(){
        $("body").toggleClass("linguaout");
    });
    $(".filtro-cat").click(function(){
        $("body").toggleClass("filtroout");
    });

    $(".accordion-label").click(function(){
        $(this).parent().toggleClass("open");
    });

    $(".gallery").bxSlider({
        mode: 'fade',
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            console.log($slideElement);
            $(" .counter",$slideElement.closest(".outer-gallery")).text(newIndex+1);
        }
    });


    $(".bx-next").on('mousemove', function(e){
        var parentOffset = $(this).offset();
        var windowwidth = $(window).width()/2 - 60;

        var alfa = windowwidth;
        if( $("body").hasClass("nextactive")) {
            alfa = 0;
        }

        $('.next-arrow').css({
            left:  e.pageX - parentOffset.left + alfa,
            top:   e.pageY+30 - parentOffset.top,
            "z-index": 1000003
        });
    });

    $( ".bx-next" )
        .mouseenter(function() {
            $('.next-arrow').css("display","block");
        })
        .mouseleave(function() {
            $('.next-arrow').css("display","none");
        });


    $(".bx-prev").on('mousemove', function(e){
        var parentOffset = $(this).offset();
        var windowwidth = $(window).width()/2;
        $('.prev-arrow').css({
            left:  e.pageX - parentOffset.left,
            top:   e.pageY+30 - parentOffset.top,
            "z-index": 1000003
        });
    });

    $( ".bx-prev" )
        .mouseenter(function() {
            $('.prev-arrow').css("display","block");
        })
        .mouseleave(function() {
            $('.prev-arrow').css("display","none");
        });

    var testof = "";
    $(".f-b-r").click(function(){
        var testo = "";

        if($(this).hasClass("active"))
        {
            $(this).removeClass("active");
            if($(".f-b-r.active").length > 0)
            {
                var count = 0;
                $(".f-b-r.active").each(function(index){
                    count++;
                    if(count == 1)
                        testo = $(this).text();
                    else
                        testo = testo +", "+$(this).text();
                });
            }
            else
            {
                testo = $(".all-articles-f").text();
                $(".filter-multi").removeClass("multi-active-f");
                $(".image-post-j,.download-block,.col4sfs").css("display","block");
                $(".clearl").removeClass("clearl");
                $(".col4sfs:visible").each(function(index1){
                    if ((index1) % 4 == 0) $(this).addClass('clearl');
                });
            }
        }
        else
        {
            // if($("body").hasClass("page-id-10359"))
// 			{
// 				$(".f-b-r.active").removeClass("active");
// 			}
            if($(".f-b-r.active").length > 0)
            {
                testo = $("span.filter-names").text()+", "+$(this).text();
            }
            else
            {
                testo = $(this).text();
                testof = $(this).attr("data-id");
            }
            $(this).addClass("active");
            $(".filter-multi").addClass("multi-active-f");
        }
        $(".filter-names").text(testo);
        if($(".f-b-r.active").length > 0)
        {
            var nometot = "";
            $(".image-post-j,.download-block,.col4sfs").css("display","none");
            $(".f-b-r.active").each(function(index){
                var idcat = $(this).attr("data-id");
                nometot += $(this).text()+", ";

                $(".col4sfs").each(function(index1){
                    var catf = $(this).attr("data-cat");
                    if (catf.indexOf(idcat) !== -1 || idcat == catf) {
                        $(this).css("display","block");
                    }
                });

                $(".clearl").removeClass("clearl");
                $(".col4sfs:visible").each(function(index1){
                    if ((index1) % 4 == 0) $(this).addClass('clearl');
                });
                $(".image-post-j[data-cat-id='"+idcat+"'],.download-block[data-id='"+idcat+"']").css("display","block");
            });
            nometot = nometot.substring(0,(nometot.length-2));
            $(".cpsf").text($(".col4sfs:visible").length);
            $(".namecatsf").text(nometot);
            $(".confiltro").addClass("show");
        }
        else
        {
            $(".confiltro").removeClass("show");
        }
    });
    $(".all-articles-f").click(function(index){
        $(".f-b-r").removeClass("active");
        $(".multi-active-f").removeClass("multi-active-f");
        $(".filter-names").text($(".all-articles-f").text());
        $(".image-post-j,.download-block,.col4sfs").css("display","block");
        $(".clearl").removeClass("clearl");
        $(".col4sfs:visible").each(function(index1){
            if ((index1) % 4 == 0) $(this).addClass('clearl');
        });
    });

    if(anch)
    {
        $(".accordion[data-mk='"+anch+"'] .accordion-label").trigger("click");
        $("html, body").animate({ scrollTop: $(".accordion[data-mk='"+anch+"'] .accordion-label").offset().top - 100 },200);
    }

    var down = getParameterByName('download');
    var catsf1 = getParameterByName('catsf1');
    var catsf2 = getParameterByName('catsf2');
    var catsf3 = getParameterByName('catsf3');
    var catsf4 = getParameterByName('catsf4');
    var catsf5 = getParameterByName('catsf5');
    var catsf6 = getParameterByName('catsf6');
    var catsf7 = getParameterByName('catsf7');
    var catsf8 = getParameterByName('catsf8');
    var catsf9 = getParameterByName('catsf9');

    if(catsf1)
    {
        $(".f-b-r[data-id='"+catsf1+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(catsf2)
    {
        $(".f-b-r[data-id='"+catsf2+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(catsf3)
    {
        $(".f-b-r[data-id='"+catsf3+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(catsf4)
    {
        $(".f-b-r[data-id='"+catsf4+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(catsf5)
    {
        $(".f-b-r[data-id='"+catsf5+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(catsf6)
    {
        $(".f-b-r[data-id='"+catsf6+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(catsf7)
    {
        $(".f-b-r[data-id='"+catsf7+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(catsf8)
    {
        $(".f-b-r[data-id='"+catsf8+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(catsf9)
    {
        $(".f-b-r[data-id='"+catsf9+"']").trigger("click");
        $("html, body").animate({ scrollTop: $(".block-images.sf-f").offset().top - 100 },500);
    }
    if(down)
        $(".f-b-r[data-id='"+down+"']").trigger("click");

});

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WM4TWV3');
