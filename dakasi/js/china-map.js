// 路径配置
    require.config({
    paths: {
        echarts: 'http://echarts.baidu.com/build/dist'
    }
});
// 使用
require(['echarts', 'echarts/chart/map'], function (ch) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ch.init(document.getElementById('main'));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{b}'
        },
        series: [{
            name: '中国',
            type: 'map',
            mapType: 'china',
            selectedMode: 'multiple',
            itemStyle: {
                normal: {label: {show: true}},
                emphasis: {label: {show: true}}
            },
            data: [
                {name: '广东', selected: true},
                {name: '山东', selected: true},
                {name: '河南', selected: true},
                {name: '福建', selected: true},
                {name: '江苏', selected: true},
                {name: '江西', selected: true},
                {name: '浙江', selected: true},
                {name: '上海', selected: true},
                {name: '安徽', selected: true},
            ]
        }]
    };
    var ecConfig = require('echarts/config');
    myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param) {
        var selected = param.selected;
        var str = '当前选择： ';
        for (var p in selected) {
            if (selected[p]) {
                str += p + ' ';
            }
        }
        document.getElementById('wrong-message').innerHTML = str;
    });
    // 为echarts对象加载数据
    myChart.setOption(option);
});