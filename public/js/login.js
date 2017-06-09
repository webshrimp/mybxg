require.config({
    baseUrl: "/",
    paths: {
        "jquery": "/public/assets/jquery/jquery.min",
        "bootstrap": "/public/assets/bootstrap/js/bootstrap.min",
        "echarts": "/public/assets/echarts/echarts.min",
        "cookie": "/public/assets/jquery-cookie/jquery.cookie",
        "NProgress": "/public/assets/nprogress/nprogress",
        "template": "/public/assets/art-template/template-web",
        "exit": "/public/js/exit",
        "common": "/public/js/common"
    },
    shim: {
        "bootstrap": {
            "deps": ["jquery"]
        },
        "cookie": {
            "deps": ["jquery"]
        },
        "NProgress": {
            "exports": "NProgress"
        }
    }
});

require(["jquery","bootstrap","cookie","common"], function ($) {
    $("#btn").on("click", function () {
        $.ajax({
            url: "/api/login",
            type: "post",
            data: $("#formData").serialize(),
            dataType: "json",
            success: function (e) {
                if(e.msg=="登录成功!" && e.code == 200){
                    var str = JSON.stringify(e.result);
                    $.cookie("info",str,{
                        path: "/"
                    });
                    location.href = "/index";
                }
            }
        });
        return false;
    })
});