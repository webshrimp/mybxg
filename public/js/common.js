define(["jquery","NProgress","template","cookie"], function ($, NProgress, template) {
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
        if($("#profile").length==1){
            var info = JSON.parse($.cookie("info"));
            var html = template("userinfotpl",{info:info});
            $("#profile").html(html);
            var pathname = location.pathname;
            $("ul a[href='"+pathname+"']").parent().addClass("active")
        }

    }



});
