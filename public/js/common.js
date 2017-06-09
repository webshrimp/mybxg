define(["jquery","../assets/nprogress/nprogress","../assets/jquery-cookie/jquery.cookie"], function ($, NProgress) {
    //鼠标点击事件
    NProgress.start();
    //
    NProgress.done();

    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });


    if(!(location.pathname=="/login"||location.pathname=="/index/login") && !$.cookie("PHPSESSID")){
        location.href= "/login";
    }else if($.cookie("PHPSESSID")){
        var info = JSON.parse($.cookie("info"));
        $(".profile img").css("display","block").attr("src",info.tc_avatar);
        $(".profile h4").text(info.tc_name);
    }

});
