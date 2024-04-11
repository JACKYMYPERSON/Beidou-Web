window.onload = function () {
    // 图表部分
    (function () {

        var myChart = echarts.init(document.querySelector(".chart"));
        let arr = dijson('invest')		// arr获取拆分后的WaiMao文件的数据
        // console.log(arr)					//f12查看详细数据
        var option = {
            tooltip: {
                trigger: "axis"
            },

            // 表上方选项
            legend: {
                top: "0%",
                textStyle: {
                    color: "#a62a00",//选项的颜色
                    fontSize: "18"
                }
            },

            // 坐标系位置
            grid: {
                left: "5%",
                top: "10%",
                right: "5%",
                bottom: "0%",
                containLabel: true
            },
            // 柱状图与折线图切换
            toolbox: {
                show: true,
                feature: {
                    /* line是折线图，bar是柱形图*/
                    magicType: { show: true, type: ['line', 'bar'] },
                },
            },


            // x轴
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    // x轴数据
                    data: arr[0],
                    axisLabel: {
                        textStyle: {
                            color: "#a2000c",//x轴数字颜色
                            fontSize: 14
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#a2000c",// x轴线颜色
                            width: 1
                        }
                    }
                }
            ],
            // y轴
            yAxis: [
                {
                    type: "value",
                    axisTick: { show: false },
                    axisLabel: {
                        textStyle: {
                            color: "#a2000c",//y轴数字颜色
                            fontSize: 14
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#a2000c",
                            width: 2
                        }
                    },
                    // 修改分割线的颜色
                    splitLine: {
                        lineStyle: {
                            color: "rgba(0,0,0,0.1)"
                        }
                    }
                }
            ],

            // 数据
            series: [
                {
                    name: "能源投资(万亿元人民币):",
                    type: "line",
                    smooth: true,
                    // 单独修改当前线条的样式
                    lineStyle: {
                        color: "#a65600",//线条颜色
                        width: "1"
                    },
                    stack: 'all', // 堆叠图的设置
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "#a65600",
                                        opacity: 0.2
                                    },
                                    {
                                        offset: 0.8,
                                        color: "#a65600",
                                        opacity: 0.2
                                    }
                                ],
                                false
                            ),
                            shadowColor: "rgba(0, 0, 0, 0.1)"
                        }
                    },
                    // 设置拐点
                    symbol: "circle",
                    // 拐点大小
                    symbolSize: 1,
                    // 开始不显示拐点， 鼠标经过显示
                    showSymbol: false,
                    // 设置拐点颜色以及边框
                    itemStyle: {
                        color: "#a65600",//选项线的颜色
                        borderColor: "#a65600",
                        borderWidth: 6
                    },
                    data: arr[1]
                },
                // 一带一路集装箱海运量指数
                {
                    name: "矿产资源投资(万亿元人民币):",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: "#ffd740",//线条颜色
                            width: "1"
                        }
                    },
                    stack: 'all', // 堆叠图的设置
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "#ffd740",
                                        opacity: 0.2
                                    },
                                    {
                                        offset: 0.8,
                                        color: "#ffd740",
                                        opacity: 0.2
                                    }
                                ],
                                false
                            ),
                            shadowColor: "rgba(0, 0, 0, 0.1)"
                        }
                    },
                    // 设置拐点 小圆点
                    symbol: "circle",
                    // 拐点大小
                    symbolSize: 1,
                    // 设置拐点颜色以及边框
                    itemStyle: {
                        color: "#ffd740",
                        borderColor: "#ffd740",//选项线的颜色
                        borderWidth: 6
                    },
                    // 开始不显示拐点， 鼠标经过显示
                    showSymbol: false,
                    data: arr[2]
                },
                // 海上丝绸之路运价指数
                {
                    name: "基础设施投资(万亿元人民币):",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: "#a0000f",//线条颜色
                            width: "1"
                        }
                    },
                    stack: 'all', // 堆叠图的设置
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "#a0000f",
                                        opacity: 0.2
                                    },
                                    {
                                        offset: 0.8,
                                        color: "#a0000f",
                                        opacity: 0.2
                                    }
                                ],
                                false
                            ),
                            shadowColor: "rgba(0, 0, 0, 0.1)"
                        }
                    },
                    // 设置拐点 小圆点
                    symbol: "circle",
                    // 拐点大小
                    symbolSize: 1,
                    // 设置拐点颜色以及边框
                    itemStyle: {
                        color: "#a0000f",//选项线的颜色
                        borderColor: "#a0000f",
                        borderWidth: 6
                    },
                    // 开始不显示拐点， 鼠标经过显示
                    showSymbol: false,
                    data: arr[3]
                },

            ]
        };


        myChart.setOption(option);
        //  图表跟随屏幕自适应
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })();
}