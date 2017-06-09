require.config({
    paths: {
        "jquery": "/public/assets/jquery/jquery.min",
        "bootstrap": "/public/assets/bootstrap/js/bootstrap.min",
        "cookie": "/public/assets/jquery-cookie/jquery.cookie"
    },
    shim: {
        "bootstrap": {
            "deps": ["jquery"]
        },
        "cookie": {
            "deps": ["jquery"]
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