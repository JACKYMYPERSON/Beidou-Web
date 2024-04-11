window.onload = function () {
    // 下拉菜单的显示与隐藏
    (function () {
        let area_heads = document.querySelectorAll('.area .area-head')
        let area_bodys = document.querySelectorAll('.area .area-body')
        let box_body = document.querySelector('.box-body')
        let fisrt_button = document.querySelector('.first-button')
        var country_links = document.querySelectorAll('.country-link')
        for (let i = 0; i < area_heads.length; i++) {
            area_heads[i].onclick = function () {
                for (let j = 0; j < area_bodys.length; j++) {
                    area_bodys[j].style.display = 'none'
                }

                this.nextElementSibling.style.display = 'flex'
            }
        }
        box_body.addEventListener('click', function () {
            for (let j = 0; j < area_bodys.length; j++) {
                area_bodys[j].style.display = 'none'

            }
        })
        for (let i = 0; i < country_links.length; i++) {
            country_links[i].onclick = function () {
                fisrt_button.classList.remove('first-button')
            }

        }
    })();

    // 图表部分
    (function () {
        let myChart = echarts.init(document.querySelector(".chart"));
        let arr = dijson('Mongolia')		// arr获取拆分后的WaiMao文件的数据
        let option = {
            tooltip: {
                trigger: "axis"
            },
            // 表上方选项
            legend: {
                top: "0%",
                data: ["该国与中国进出口总额",
                    "该国从中国进口",
                    "该国对中国出口"],
                textStyle: {
                    color: "#a62a00",//选项的颜色
                    fontSize: "18"
                }
            },
            // 坐标系位置
            grid: {
                left: "70",
                top: "30",
                right: "20",
                bottom: "70",
                containLabel: true
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
                // 一带一路贸易额指数
                {
                    name: "该国与中国进出口总额",
                    type: "line",
                    smooth: true,
                    // 单独修改当前线条的样式
                    lineStyle: {
                        color: "#a65600",//线条颜色
                        width: "1"
                    },
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
                    name: "该国从中国进口",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: "#ffd740",//线条颜色
                            width: "1"
                        }
                    },
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
                    name: "该国对中国出口",
                    type: "line",
                    smooth: true,
                    lineStyle: {
                        normal: {
                            color: "#a0000f",//线条颜色
                            width: "1"
                        }
                    },
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


        // 可点击查看的的数据
        $(".country-link").on("click", function () {
            let value = $(this).val()
            console.log("link Succeed!");
            console.log(value);
            arr = dijson(value)
            //  点击button之后 根据当前a的索引号 找到对应的 yearData的相关对象
            let option = {
                tooltip: {
                    trigger: "axis"
                },

                // 表上方选项
                legend: {
                    top: "0%",
                    data: ["该国与中国进出口总额",
                        "该国从中国进口",
                        "该国对中国出口"],
                    textStyle: {
                        color: "#a62a00",//选项的颜色
                        fontSize: "18"
                    }
                },

                // 坐标系位置
                grid: {
                    left: "70",
                    top: "30",
                    right: "20",
                    bottom: "70",
                    containLabel: true
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
                    // 一带一路贸易额指数
                    {
                        name: "该国与中国进出口总额",
                        type: "line",
                        smooth: true,
                        // 单独修改当前线条的样式
                        lineStyle: {
                            color: "#a65600",//线条颜色
                            width: "1"
                        },
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
                        name: "该国从中国进口",
                        type: "line",
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "#ffd740",//线条颜色
                                width: "1"
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0,
                                    0,
                                    0,
                                    1,
                                    [
                                        {
                                            offset: 0.8,
                                            color: "#ffd740",
                                            opacity: 0.2
                                        },
                                        {
                                            offset: 1,
                                            color: "#ffd740",
                                            opacity: 0.8
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
                        name: "该国对中国出口",
                        type: "line",
                        smooth: true,
                        lineStyle: {
                            normal: {
                                color: "#FF3333",//线条颜色
                                width: "1"
                            }
                        },
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
        });

    })();
}