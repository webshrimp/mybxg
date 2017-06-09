require.config({
    paths: {
        "jquery": "/public/assets/jquery/jquery.min",
        "bootstrap": "/public/assets/bootstrap/js/bootstrap.min",
        "echarts": "/public/assets/echarts/echarts.min",
        "cookie": "/public/assets/jquery-cookie/jquery.cookie",
        "NProgress": "/public/assets/nprogress/nprogress"
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

require(["jquery","echarts","bootstrap","exit","common"], function ($ , echarts) {
    //基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    //使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

});




