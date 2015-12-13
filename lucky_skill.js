window.onload = function()
{
var myChart = echarts.init(document.getElementById('container'),'macarons');
option = {
    title : {
        text: 'Lucky Technical Skill',
        subtext: '我擅长和熟悉的事情',
        x:'left',
        y:'top'
    },
    tooltip : {
        trigger: 'item',
        formatter: '{a} : {b}'
    },
    legend : {
        x: 'right',
        data: ['技术', '语言', '工具']
    },
    series : [
        {
            type:'force',
            name : "技能图",
            ribbonType: false,
            categories : [
                {
                    name: '技术',
                    symbolSize: 20
                },
                {
                    name: '语言',
                    symbolSize: 20
                },
                {
                    name:'工具',
                    symbolSize: 20
                }
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    },
                    nodeStyle : {
                        brushType : 'both',
                        borderColor : 'rgba(255,215,0,0.4)',
                        borderWidth : 1
                    },
                    linkStyle: {
                        type: 'curve'
                    }
                },
                emphasis: {
                    label: {
                        show: false
                        // textStyle: null
                    },
                    nodeStyle : {
                        //r: 30
                    },
                    linkStyle : {}
                }
            },
            useWorker: false,
            minRadius : 15,
            maxRadius : 25,
            gravity: 1.1,
            scaling: 1.1,
            roam: 'move',
            nodes:[
                {category:0, name: '数据结构'},
                {category:0, name: '算法'},
                {category:0, name: '网络'},
                {category:0, name: '机器学习'},
                {category:0, name: '开源项目'},
                {category:0, name: '安全'},
                {category:0, name: '虚拟化'},
                {category:0, name: '数据挖掘'},
                {category:1, name: 'C/C++'},
                {category:1, name: 'JavaScript'},
                {category:1, name: 'Python'},
                {category:1, name: 'Lisp'},
                {category:2, name: 'Windows'},
                {category:2, name: 'Linux'},
                {category:2, name: 'Mac'},
                {category:2, name: 'Vim'},
                {category:2, name: 'Git'},
                {category:2, name: 'WinDBG'},

            ],
            links : [
                {},
                {},
            ]
        }
    ]
};

myChart.setOption(option); 
};


                    