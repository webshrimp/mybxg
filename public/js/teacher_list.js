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

require(["jquery","template","bootstrap","exit","common"], function ($,template ) {
    $(document).on("ajaxStart", function () {
        console.log(1)
    });
    $(document).on("ajaxStop", function () {
        console.log(2)
    });
    $.ajax({
        url: "/api/teacher",
        type: "get",
        dataType: "json",
        success: function (r) {
            var html1 = template("teachertpl",{result:r.result});
            $(".teacher-list tbody").html(html1);


            $("td").find("a:first").on("click",function () {
                var id = $(this).closest("tr").find("td:eq(1)").attr("data-id");
                $.ajax({
                    url: "/api/teacher/view",
                    type: "get",
                    data: "tc_id="+id,
                    dataType: "json",
                    success: function (r) {
                        if(r.result.tc_gender){
                            r.result.tc_gender = "女";
                        }else{
                            r.result.tc_gender = "男";
                        }
                        r.result.tc_hometown=r.result.tc_hometown.replace(/\|/g," ");
                        var html2 = template("teacherinfotpl",r.result);
                        $(".panel-body tbody").html(html2);
                    }
                });
            });
        }
    });



});