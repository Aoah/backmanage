var chartmodule=angular.module('chart3',[]);

chartmodule.directive('chartpie', function() {
  return{
    restrict: "EA",
    template: '<div id="main2" style="width:100%;height:600px; background:white"></div>',
    replace: true,
    compile: function(tElelem, tArrts, transcludeFn) {

        var myChart = echarts.init(document.getElementById('main2'));

        // 指定图表的配置项和数据


        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['李宁','耐克','阿迪达斯','新百伦','杰克琼斯','361','Lee','狼爪','马克华菲','asics']
            },
            series: [
                {
                    name:'销量',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'数量', selected:true},
                        {value:679, name:'盈利'},
                        {value:1548, name:'热度'}
                    ]
                },
                {
                    name:'销量',
                    type:'pie',
                    radius: ['40%', '55%'],

                    data:[
                        {value:335, name:'Lee'},
                        {value:310, name:'Levis'},
                        {value:234, name:'马克华菲'},
                        {value:135, name:'361'},
                        {value:1048, name:'百度'},
                        {value:251, name:'耐克'},
                        {value:147, name:'李宁'},
                        {value:102, name:'三星'}
                    ]
                }
            ]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
  };
})
