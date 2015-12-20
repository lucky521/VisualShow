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
            text: '月份'
        },
        labels: {
            //format:  '{value: %b, %Y}'
        },
        max: 12,
        min: 1,
        showEmpty: true,
        startOnTick: false,
        endOnTick: false,
        tickPixelInterval: 50, //标度间隙
    },
    yAxis: {
        title: {
            text: ''
        },
        labels: {
            format: '{value}日'
        },
        max: 31,
        min: 1,
        gridLineWidth: 0,
        showEmpty: true,
        startOnTick: false,
        endOnTick: false,
        tickPixelInterval: 50,
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
            pointFormat: '{point.x} {point.y} {point.value} {point.name}'
        },

        point: {
            events: {
                click: function() {
                    console.log(this.name);
                    window.open("http://"+this.url, '_blank');
                }
            },
        },

        //month,day,value,name,url
        //1,1,10,'baidu','www.baidu.com'
        data: [{
            x: 1,
            y: 3,
            value: 1,
            name: "Lucky521",
            url: "lucky521.github.com",
            color: "#00FF00"
        },
        {
            x: 5,
            y: 21,
            value: 11,
            name: "Lucky",
            url: "lucky521.github.com",
            color: "#10FF11"
        }]

    }],

    plotOptions: {
    }

};

$(document).ready(function() {
    // load data from csv
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
                tmp['color'] = "#00FF00";
                chart_options.series[0]['data'].push(tmp);
            }
        }); // $.each(lines, function(lineNo, line)
    }); // $.get('data.csv', function(data)

    console.log(chart_options);
    // build chart
    $(function() {
        $('#container').highcharts(chart_options);
    });

}); // $(document).ready(function()
