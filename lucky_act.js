// set chart options
chart_options = {
    credits: { //delete logo
        enabled: false
    }, 
    chart: {
        type: 'heatmap',
        inverted: true,
    },
    title: {
        text: 'My Activities',
        align: 'left'
    },
    subtitle: {
        text: '记录我工作学习生活中的点点滴滴',
        align: 'left'
    },
    legend: { // delete legend
        enabled: false,
    },

    xAxis: {
        title:{
            text: ''
        },
        labels: {
            format:  '{value}月'
        },
        max: 12,
        min: 1,
        showEmpty: true,
        startOnTick: false,
        endOnTick: false,
        tickPixelInterval: 1, //标度间隙
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value}'
        },
        max: 31,
        min: 1,
        gridLineWidth: 0,
        showEmpty: true,
        startOnTick: false,
        endOnTick: false,
        tickPixelInterval: 1,
        },

    colorAxis: {
        stops: [
            [0, '#3060cf'],
            [0.5, '#fffbbc'],
            [0.9, '#c4463a']
        ],
        //min: -5
    },

    series: [{
        borderWidth: 0.4,
        //colsize: 90000000, //一行的高度, 仅用于csv
        
        tooltip: {
            headerFormat: '今日活动<br/>',
            pointFormat: '{point.x}月 {point.y}日 {point.name}'
        },

        point: {
            events: {
                click: function() {
                    console.log(this.name);
                    window.open("http://"+this.url, '_blank');
                }
            },
        },

        data: [
        {
            x: 5,
            y: 21,
            value: 11,
            name: "Lucky",
            url: "lucky521.github.com",
            color: "#666362"
        }]

    }],

    plotOptions: {
    }

};

function value_to_color(value)
{
return  "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

$(document).ready(function() {
    // load data from csv 
    // 这个函数的执行顺利
    $.get('data.csv', function(data) {
        // Split the lines
        var lines = data.split('\n');
        var data = [];
        $.each(lines, function(lineNo, line) {
            // splict among ','
            var items = line.split(',');
            // header line containes categories
            if (lineNo == 0) {
            }
            // the rest of the lines contain data with their name in the first position
            else {
                tmp = {};
                tmp['x'] = parseInt(items[0]);
                tmp['y'] = parseInt(items[1]);
                tmp['value'] = parseInt(items[2]);
                tmp['name'] = String(items[3]);
                tmp['url'] = String(items[4]);
                tmp['color'] = value_to_color(tmp['value']);
                chart_options.series[0]['data'].push(tmp);
            }
        }); // $.each(lines, function(lineNo, line)
        $('#container').highcharts(chart_options);
    }); // $.get('data.csv', function(data)
}); // $(document).ready(function()
