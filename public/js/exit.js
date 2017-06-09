define(["jquery","cookie"], function ($) {
    //鼠标点击事件
    $("#exit").on("click", function () {
        $.ajax({
            url: "/api/logout",
            type: "post",
            dataType: "json",
            success: function (e) {
                if(e.code==200){
                    $.removeCookie("info",{
                        path: "/"
                    });
                    location.href = "/login";
                }
            }
        });
    });
});