/**
 * 主程序
 * Created by liuyy on 2016/7/29.
 */
var oneAjaxChart = new AjaxChart({
    container:'elementId',
    chartType:'yourChartType',//line,pie,column,area
    ajaxUrl:'yourAjaxUrl',
    ajaxParams:{
        param1:'value',
        param2:function(){
            return 'value2';
        }
    }
});

oneAjaxChart.refresh({
    chartData:{series:[]},
    clickHandler:function (xLabel,y) {
        
    },
    afterUpdate:function () {
        
    }
});

(function ($, Highcharts) {
    //======================================
    //Highchart Optoins 全局设置
    //======================================
    var CHART_OPTIONS={
        global:{
            title:null,
            xAxis:{
                categories:function () {

                }
            },
            tooltip:{
                pointFormat:''
            },
            legend:{
                enabled:false
            },
            yAxis:{
                title:{
                    enabled:true
                }
            }
        },
        line:{
            chart:{
                type:'line'
            },
            plotOptions:{
                line:{
                    dataLabels:{
                        enabled:true
                    }
                }
            }
        }
    }

});
