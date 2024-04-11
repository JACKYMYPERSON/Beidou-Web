window.onload = function () {

  // 柱状图 左1
  (function getEcharts3DBar() {
    // 调用
    let serveTBar = echarts.init(document.getElementById('jczy_bar'));
    //serveTBar.setOption(getEcharts3DBar());
    let arr = diverseForMonth('2017', 'silverMarin')			// arr获取拆分后的WaiMao文件的数据
    console.log(arr)					//f12查看详细数据


    // 模板效果
    let colorArr = ["#f60018", "#b92e3b", "#a0000f"];//柱子三面的颜色 左侧、右侧、顶部
    let color = {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: colorArr[0],
        },
        {
          offset: 0.5,
          color: colorArr[0],
        },
        {
          offset: 0.5,
          color: colorArr[1],
        },
        {
          offset: 1,
          color: colorArr[1],
        },
      ],
    };
    let colorArr2 = ["#EE7700", "#FFAA33", "#EE7700"];//柱子三面的颜色 左侧、右侧、顶部
    let color2 = {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: colorArr2[0],
        },
        {
          offset: 0.5,
          color: colorArr2[0],
        },
        {
          offset: 0.5,
          color: colorArr2[1],
        },
        {
          offset: 1,
          color: colorArr2[1],
        },
      ],
    };
    let colorArr3 = ["#a65600", "#663300", "#663300"];//柱子三面的颜色 左侧、右侧、顶部
    let color3 = {
      type: "linear",
      x: 0,
      x2: 1,
      y: 0,
      y2: 0,
      colorStops: [
        {
          offset: 0,
          color: colorArr3[0],
        },
        {
          offset: 0.5,
          color: colorArr3[0],
        },
        {
          offset: 0.5,
          color: colorArr3[1],
        },
        {
          offset: 1,
          color: colorArr3[1],
        },
      ],
    };

    let barWidth = 10;
    let option = {
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          let str = params[0].name + ":";
          params.filter(function (item) {
            if (item.componentSubType == "bar") {
              str += "<br/>" + item.seriesName + ":" + item.value;
            }
          });
          return str;
        },
      },
      grid: {
        x: '7%',
        x2: '7%',
        y: '15%',
        y2: '15%',
      },
      legend: {
        show: false,
        data: ['一带一路贸易额指数', '“一带一路”集装箱海运量指数', '海上丝绸之路运价指数'],
        textStyle: {
          color: '#fff',
          fontSize: '20'
        }
      },
      xAxis: {
        data: arr[0],
        //坐标轴
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: '#214776'
          },
          textStyle: {
            color: '#fff',
            fontSize: '10'
          }
        },
        type: 'category',
        axisLabel: {
          textStyle: {
            color: '#3C34FF',
            fontWeight: 500,
            fontSize: '14'
          }
        },
        axisTick: {
          textStyle: {
            color: '#fff',
            fontSize: '16'
          },
          show: false,
        },
        splitLine: { show: false }
      },
      yAxis: {
        type: 'value',
        //坐标轴
        axisLine: {
          show: true,
          lineStyle: {
            width: 1,
            color: '#fff'
          },
          textStyle: {
            color: '#fff',
            fontSize: '10'
          }
        },
        axisTick: {
          show: false
        },
        //坐标值标注
        axisLabel: {
          show: true,
          textStyle: {
            color: '#3C34FF',
          }
        },
        //分格线
        splitLine: {
          lineStyle: {
            color: '#13365f'
          }
        }
      },
      series: [
        {
          z: 1,
          name: '一带一路贸易额指数',
          type: "bar",
          barWidth: barWidth,
          barGap: "0%",
          data: arr[1],
          itemStyle: {
            normal: {
              color: color
            },
          },
        },
        {
          z: 2,
          name: '一带一路贸易额指数',
          type: "pictorialBar",
          data: arr[1],
          symbol: "diamond",
          symbolOffset: ["-75%", "50%"],
          symbolSize: [barWidth, 10],
          itemStyle: {
            normal: {
              color: color
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          z: 3,
          name: '一带一路贸易额指数',
          type: "pictorialBar",
          symbolPosition: "end",
          data: arr[1],
          symbol: "diamond",
          symbolOffset: ["-75%", "-50%"],
          symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
          itemStyle: {
            normal: {
              borderWidth: 2,
              color: colorArr[2]
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          z: 1,
          name: '“一带一路”集装箱海运量指数',
          type: "bar",
          barWidth: barWidth,
          barGap: "50%",
          data: arr[2],
          itemStyle: {
            normal: {
              color: color2
            },
          },
        },
        {
          z: 2,
          name: '“一带一路”集装箱海运量指数',
          type: "pictorialBar",
          data: arr[2],
          symbol: "diamond",
          symbolOffset: ["75%", "50%"],
          symbolSize: [barWidth, 10],
          itemStyle: {
            normal: {
              color: color2
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          z: 3,
          name: '“一带一路”集装箱海运量指数',
          type: "pictorialBar",
          symbolPosition: "end",
          data: arr[2],
          symbol: "diamond",
          symbolOffset: ["75%", "-50%"],
          symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
          itemStyle: {
            normal: {
              borderWidth: 2,
              color: colorArr2[2]
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          z: 1,
          name: '海上丝绸之路运价指数',
          type: "bar",
          barWidth: barWidth,
          barGap: "50%",
          data: arr[3],
          itemStyle: {
            normal: {
              color: color3
            },
          },
        },
        {
          z: 2,
          name: '海上丝绸之路运价指数',
          type: "pictorialBar",
          data: arr[3],
          symbol: "diamond",
          symbolOffset: ["75%", "50%"],
          symbolSize: [barWidth, 10],
          itemStyle: {
            normal: {
              color: color3
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          z: 3,
          name: '海上丝绸之路运价指数',
          type: "pictorialBar",
          symbolPosition: "end",
          data: arr[3],
          symbol: "diamond",
          symbolOffset: ["75%", "-50%"],
          symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
          itemStyle: {
            normal: {
              borderWidth: 2,
              color: colorArr3[2]
            },
          },
          tooltip: {
            show: false,
          },
        },

      ],
    };
    serveTBar.setOption(option);
    window.addEventListener("resize", function () {
      serveTBar.resize();
    });

    console.log("OK!")



    // 真实效果
    $(".year5-link").on("click", function () {
      //let value = document.getElementById("year-link").getAttribute("value")
      let value = $(this).val()
      console.log("link Succeed!");
      console.log(value);
      arr = diverseForMonth(value, 'silverMarin')



      let colorArr = ["#f60018", "#b92e3b", "#a0000f"];//柱子三面的颜色 左侧、右侧、顶部
      let color = {
        type: "linear",
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
          {
            offset: 0,
            color: colorArr[0],
          },
          {
            offset: 0.5,
            color: colorArr[0],
          },
          {
            offset: 0.5,
            color: colorArr[1],
          },
          {
            offset: 1,
            color: colorArr[1],
          },
        ],
      };
      let colorArr2 = ["#EE7700", "#FFAA33", "#EE7700"];//柱子三面的颜色 左侧、右侧、顶部
      let color2 = {
        type: "linear",
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
          {
            offset: 0,
            color: colorArr2[0],
          },
          {
            offset: 0.5,
            color: colorArr2[0],
          },
          {
            offset: 0.5,
            color: colorArr2[1],
          },
          {
            offset: 1,
            color: colorArr2[1],
          },
        ],
      };
      let colorArr3 = ["#a65600", "#663300", "#663300"];//柱子三面的颜色 左侧、右侧、顶部
      let color3 = {
        type: "linear",
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [
          {
            offset: 0,
            color: colorArr3[0],
          },
          {
            offset: 0.5,
            color: colorArr3[0],
          },
          {
            offset: 0.5,
            color: colorArr3[1],
          },
          {
            offset: 1,
            color: colorArr3[1],
          },
        ],
      };
      let barWidth = 8;

      let option = {
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            let str = params[0].name + ":";
            params.filter(function (item) {
              if (item.componentSubType == "bar") {
                str += "<br/>" + item.seriesName + ":" + item.value;
              }
            });
            return str;
          },
        },

        grid: {
          x: '7%',
          x2: '0%',
          y: '15%',
          y2: '15%',
        },
        legend: {
          show: false,
          data: ['一带一路贸易额指数', '“一带一路”集装箱海运量指数', '海上丝绸之路运价指数'],
          textStyle: {
            color: '#fff',
            fontSize: '20'
          }
        },
        xAxis: {
          data: arr[0],
          //坐标轴
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: '#214776'
            },
            textStyle: {
              color: '#fff',
              fontSize: '10'
            }
          },
          type: 'category',
          axisLabel: {
            textStyle: {
              color: '#3C34FF',
              fontWeight: 500,
              fontSize: '14'
            }
          },
          axisTick: {
            textStyle: {
              color: '#fff',
              fontSize: '16'
            },
            show: false,
          },
          splitLine: { show: false }
        },
        yAxis: {
          type: 'value',
          //坐标轴
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: '#214776'
            },
            textStyle: {
              color: '#fff',
              fontSize: '10'
            }
          },
          axisTick: {
            show: false
          },
          //坐标值标注
          axisLabel: {
            show: true,
            textStyle: {
              color: '#3C34FF',
            }
          },
          //分格线
          splitLine: {
            lineStyle: {
              color: '#13365f'
            }
          }
        },
        series: [
          //
          {
            z: 1,
            name: '一带一路贸易额指数',
            type: "bar",
            barWidth: barWidth,
            barGap: "0%",
            data: arr[1],
            itemStyle: {
              normal: {
                color: color
              },
            },
          },
          {
            z: 2,
            name: '一带一路贸易额指数',
            type: "pictorialBar",
            data: arr[1],
            symbol: "diamond",
            symbolOffset: ["-75%", "50%"],
            symbolSize: [barWidth, 10],
            itemStyle: {
              normal: {
                color: color
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 3,
            name: '一带一路贸易额指数',
            type: "pictorialBar",
            symbolPosition: "end",
            data: arr[1],
            symbol: "diamond",
            symbolOffset: ["-75%", "-50%"],
            symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
            itemStyle: {
              normal: {
                borderWidth: 2,
                color: colorArr[2]
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 1,
            name: '“一带一路”集装箱海运量指数',
            type: "bar",
            barWidth: barWidth,
            barGap: "50%",
            data: arr[2],
            itemStyle: {
              normal: {
                color: color2
              },
            },
          },
          {
            z: 2,
            name: '“一带一路”集装箱海运量指数',
            type: "pictorialBar",
            data: arr[2],
            symbol: "diamond",
            symbolOffset: ["75%", "50%"],
            symbolSize: [barWidth, 10],
            itemStyle: {
              normal: {
                color: color2
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 3,
            name: '“一带一路”集装箱海运量指数',
            type: "pictorialBar",
            symbolPosition: "end",
            data: arr[2],
            symbol: "diamond",
            symbolOffset: ["75%", "-50%"],
            symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
            itemStyle: {
              normal: {
                borderWidth: 2,
                color: colorArr2[2]
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 1,
            name: '海上丝绸之路运价指数',
            type: "bar",
            barWidth: barWidth,
            barGap: "50%",
            data: arr[3],
            itemStyle: {
              normal: {
                color: color3
              },
            },
          },
          {
            z: 2,
            name: '海上丝绸之路运价指数',
            type: "pictorialBar",
            data: arr[3],
            symbol: "diamond",
            symbolOffset: ["75%", "50%"],
            symbolSize: [barWidth, 10],
            itemStyle: {
              normal: {
                color: color3
              },
            },
            tooltip: {
              show: false,
            },
          },
          {
            z: 3,
            name: '海上丝绸之路运价指数',
            type: "pictorialBar",
            symbolPosition: "end",
            data: arr[3],
            symbol: "diamond",
            symbolOffset: ["75%", "-50%"],
            symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
            itemStyle: {
              normal: {
                borderWidth: 2,
                color: colorArr3[2]
              },
            },
            tooltip: {
              show: false,
            },
          },

        ],
      };
      serveTBar.setOption(option);
    });

  })();

  // 折线图 左2
  (function () {
    // 1. 实例化对象
    let myChart = echarts.init(document.querySelector(".line .chart"));
    let arr = diverseForMonth('2014', 'ExportnInport')			// arr获取拆分后的Exln文件的数据
    console.log(arr)					//f12查看详细数据
    // 2.指定配置
    let option = {
      color: ["#57A8FF", "#E69119", "#FA0C1D"],
      tooltip: {
        trigger: "axis"
      },
      legend: {
        // 如果series 对象有name 值，则 legend可以不用写data
        // 修改图例组件 文字颜色
        textStyle: {
          color: "#4c9bfd"
        },
        // 这个10% 必须加引号
        right: "10%"
      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: true, // 显示边框
        borderColor: "#012f4a", // 边框颜色
        containLabel: true // 包含刻度文字在内
      },
      // 柱状图与折线图切换
      toolbox: {
        show: true,
        feature: {
          /* line是折线图，bar是柱形图*/
          magicType: { show: true, type: ['line', 'bar'] },
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: arr[0],
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#3C34FF" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        }
      },
      yAxis: {
        type: "value",
        axisTick: {
          show: false // 去除刻度线
        },
        axisLabel: {
          color: "#3C34FF" // 文本颜色
        },
        axisLine: {
          show: false // 去除轴线
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a" // 分割线颜色
          }
        }
      },
      series: [
        {
          name: "进出口贸易指数",
          type: "line",
          // true 可以让我们的折线显示带有弧度
          smooth: true,
          data: arr[1]
        },
        {
          name: "出口贸易指数",
          type: "line",
          // true 可以让我们的折线显示带有弧度
          smooth: true,
          data: arr[2]
        },
        {
          name: "进口贸易指数",
          type: "line",
          // true 可以让我们的折线显示带有弧度
          smooth: true,
          data: arr[3]
        },
      ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
      myChart.resize();
    });
    console.log("OK!")
    // 5.点击切换效果
    $(".year2-link").on("click", function () {
      //let value = document.getElementById("year-link").getAttribute("value")
      let value = $(this).val()
      console.log("link Succeed!");
      console.log(value);
      arr = diverseForMonth(value, 'ExportnInport')
      //  点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
      let option = {
        color: ["#57A8FF", "#E69119", "#FA0C1D"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          // 如果series 对象有name 值，则 legend可以不用写data
          // 修改图例组件 文字颜色
          textStyle: {
            color: "#4c9bfd"
          },
          // 这个10% 必须加引号
          right: "10%"
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a", // 边框颜色
          containLabel: true // 包含刻度文字在内
        },
        // 柱状图与折线图切换
        toolbox: {
          show: true,
          feature: {
            /* line是折线图，bar是柱形图*/
            magicType: { show: true, type: ['line', 'bar'] },
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: arr[0],
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "#3C34FF" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false // 去除刻度线
          },
          axisLabel: {
            color: "#3C34FF" // 文本颜色
          },
          axisLine: {
            show: false // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: "#012f4a" // 分割线颜色
            }
          }
        },
        series: [
          {
            name: "进出口贸易指数",
            type: "line",
            // true 可以让我们的折线显示带有弧度
            smooth: true,
            data: arr[1]
          },
          {
            name: "出口贸易指数",
            type: "line",
            // true 可以让我们的折线显示带有弧度
            smooth: true,
            data: arr[2]
          },
          {
            name: "进口贸易指数",
            type: "line",
            // true 可以让我们的折线显示带有弧度
            smooth: true,
            data: arr[3]
          },
        ]
      };
      myChart.setOption(option);
    });
  })();

  // 柱状图 左3
  (function () {
    // 1实例化对象
    let myChart = echarts.init(document.querySelector(".bar2 .chart "));
    let arr = diverseForMonth('2014', 'WaiMao');			// arr获取拆分后的WaiMao文件的数据
    console.log(arr)					//f12查看详细数据

    // 2. 指定配置项和数据
    let option = {
      color: ["#FFBF3E", "#6687E6", "#8f1d19", "#EB7060"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
      },
      // 柱状图与折线图切换
      toolbox: {
        show: true,
        feature: {
          /* line是折线图，bar是柱形图*/
          magicType: { show: true, type: ['line', 'bar'] },
        }
      },
      xAxis: [{
        type: "category",
        data: arr[0],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "#3C34FF ",
          fontSize: "8",
          // rotate: -90,
        },
        // x坐标轴的样式
        axisLine: {
          lineStyle: {
            color: "grey",
            width: 2
          }
        }
      }],
      yAxis: [{
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "#3C34FF ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "grey",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }],
      series: [{
        name: "外贸出口先导指数",
        type: "bar",
        barWidth: "20%",
        data: arr[1],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        },
      },
      {
        name: "出口经理人指数",
        type: "bar",
        barWidth: "20%",
        data: arr[2],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        },
      },
      {
        name: "新增出口订单指数",
        type: "bar",
        barWidth: "20%",
        data: arr[3],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        },
      },
      {
        name: "出口企业综合成本指数",
        type: "bar",
        barWidth: "20%",
        data: arr[4],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        },
      }
      ]
    };
    console.log("setStart");
    // 3. 把配置项给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    console.log("setCompleted");
    window.addEventListener("resize", function () {
      myChart.resize();
    });
    // 5.点击切换效果
    $(".year1-link").on("click", function () {
      //let value = document.getElementById("year-link").getAttribute("value")
      let value = $(this).val()
      console.log("link Succeed!");
      console.log(value);
      arr = diverseForMonth(value, 'Waimao');
      //  点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
      let option = {
        color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        // 修改图表的大小
        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true
        },
        // 柱状图与折线图切换
        toolbox: {
          show: true,
          feature: {
            /* line是折线图，bar是柱形图*/
            magicType: { show: true, type: ['line', 'bar'] },
          }
        },
        xAxis: [{
          type: "category",
          data: arr[0],
          axisTick: {
            alignWithLabel: true
          },
          // 修改刻度标签 相关样式
          axisLabel: {
            color: "#3C34FF ",
            fontSize: "8",
            // rotate: -90,
          },
          // x坐标轴的样式
          axisLine: {
            lineStyle: {
              color: "grey",
              width: 2
            }
          }
        }],
        yAxis: [{
          type: "value",
          // 修改刻度标签 相关样式
          axisLabel: {
            color: "#3C34FF ",
            fontSize: 12
          },
          // y轴的线条改为了 2像素
          axisLine: {
            lineStyle: {
              color: "grey",
              width: 2
            }
          },
          // y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)"
            }
          }
        }],
        series: [{
          name: "外贸出口先导指数",
          type: "bar",
          barWidth: "20%",
          data: arr[1],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },
        },
        {
          name: "出口经理人指数",
          type: "bar",
          barWidth: "20%",
          data: arr[2],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },
        },
        {
          name: "新增出口订单指数",
          type: "bar",
          barWidth: "20%",
          data: arr[3],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },
        },
        {
          name: "出口企业综合成本指数",
          type: "bar",
          barWidth: "20%",
          data: arr[4],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          },
        },
        ]
      };
      myChart.setOption(option);
    });
  })();

  // 饼形图1 右1
  (function () {
    // 1. 实例化对象
    let myChart = echarts.init(document.querySelector(".pie .chart"));
    let arr = dijson('shouru')			// arr获取拆分后的WaiMao文件的数据
    console.log(arr)					//f12查看详细数据
    // 2.指定配置
    let option = {
      color: ["#FFB861", "#AF71E5", "#6FBCFA", "#EA726C",],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },

      legend: {
        bottom: "0%",
        // 修改小图标的大小
        itemWidth: 10,
        itemHeight: 10,
        // 修改图例组件的文字为 12px
        textStyle: {
          color: "#3C34FF",
          fontSize: "8"
        }
      },
      series: [{
        name: "国民总收入(亿元):",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        // radius: ["40%", "90%"],
        radius: ["30%", "90%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [{
          value: arr[1][15],
          name: arr[0][15]
        },
        {
          value: arr[1][14],
          name: arr[0][14]
        },
        {
          value: arr[1][13],
          name: arr[0][13]
        },
        {
          value: arr[1][12],
          name: arr[0][12]
        },
        {
          value: arr[1][11],
          name: arr[0][11]
        },
        {
          value: arr[1][10],
          name: arr[0][10]
        },
        {
          value: arr[1][9],
          name: arr[0][9]
        },
        {
          value: arr[1][8],
          name: arr[0][8]
        },
        {
          value: arr[1][7],
          name: arr[0][7]
        },
        {
          value: arr[1][6],
          name: arr[0][6]
        },
        {
          value: arr[1][5],
          name: arr[0][5]
        },
        {
          value: arr[1][4],
          name: arr[0][4]
        },
        {
          value: arr[1][3],
          name: arr[0][3]
        },
        {
          value: arr[1][2],
          name: arr[0][2]
        },
        {
          value: arr[1][1],
          name: arr[0][1]
        },
        {
          value: arr[1][0],
          name: arr[0][0]
        },
        ]
      }]
    };

    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();

  // 饼形图2 
  (function () {
    let myChart = echarts.init(document.querySelector(".pie2 .chart"));
    let arr = dijson('shengchan')			// arr获取拆分后的WaiMao文件的数据
    console.log(arr)					//f12查看详细数据
    let option = {
      color: ["#FF827D", "#E3A53D", "#E2FA51", "#5CE69F", "#468BFA"],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        bottom: "0%",
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
          color: "#3C34FF",
          fontSize: "8"
        }
      },
      series: [{
        name: "生产总值(亿元):",
        type: "pie",
        radius: ["20%", "80%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [{
          value: arr[1][15],
          name: arr[0][15]
        },
        {
          value: arr[1][14],
          name: arr[0][14]
        },
        {
          value: arr[1][13],
          name: arr[0][13]
        },
        {
          value: arr[1][12],
          name: arr[0][12]
        },
        {
          value: arr[1][11],
          name: arr[0][11]
        },
        {
          value: arr[1][10],
          name: arr[0][10]
        },
        {
          value: arr[1][9],
          name: arr[0][9]
        },
        {
          value: arr[1][8],
          name: arr[0][8]
        },
        {
          value: arr[1][7],
          name: arr[0][7]
        },
        {
          value: arr[1][6],
          name: arr[0][6]
        },
        {
          value: arr[1][5],
          name: arr[0][5]
        },
        {
          value: arr[1][4],
          name: arr[0][4]
        },
        {
          value: arr[1][3],
          name: arr[0][3]
        },
        {
          value: arr[1][2],
          name: arr[0][2]
        },
        {
          value: arr[1][1],
          name: arr[0][1]
        },
        {
          value: arr[1][0],
          name: arr[0][0]
        },
        ]
      }]
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();



  // 地图 中间
  (function () {
    let myChart = echarts.init(document.querySelector(".map .chart2"));
    let geoCoordMap = {
      // 海上丝绸之路
      里斯本: [-9.13, 38.71],
      比雷埃夫斯: [23.66, 37.95],
      亚历山大: [29.92, 31.22],
      吉达: [39.02, 21.05],
      吉布提港: [43.13, 11.6],
      迪拜: [55.3, 25.25],
      孟买: [72.83, 18.97],
      科伦坡: [79.85, 6.93],
      班加罗尔: [77.60, 12.97],
      吉大港: [91.8, 22.3],
      吉隆坡: [101.7, 3.13],
      新加坡: [103.85, 1.3],
      南宁: [107.8, 22.33],
      福州: [119.28, 26.08],
      上海: [121.87, 30.82],
      釜山: [129.03, 35.1],
      北太平洋: [165, 55],
      //新亚欧大陆桥
      杭州: [120.17, 30.25],
      西安: [108.8, 33.75],
      乌鲁木齐: [87.56, 43.92],
      莫斯科: [37.12, 56.13],
      布列斯特: [23.68, 52.1],
      华沙: [21, 52.25],
      柏林: [13, 52],
      伦敦: [0.15, 51.5],
      阿拉木图: [76.89, 43.276],
      塔什干: [69.3, 41.32],
      德黑兰: [51.42, 35.63],
      安卡拉: [32.86, 39.93],
      伊斯坦布尔: [28.97, 41.01],
      //中蒙俄经济走廊
      哈巴罗夫斯克: [135.27, 48.73],
      伊尔库茨克: [104.27, 52.3],
      圣彼得堡: [30.41, 59.92],
      符拉迪沃斯托克: [131, 43],
      北京: [116.32, 39.93],
      乌兰巴托: [106.89, 47.91]
    };
    // 海上丝绸之路
    let XAData = [
      [{
        name: "上海"
      }, {
        name: "福州",
        value: 100
      }],
      [{
        name: "福州"
      }, {
        name: "南宁",
        value: 100
      }],
      [{
        name: "南宁"
      }, {
        name: "新加坡",
        value: 100
      }],
      [{
        name: "新加坡"
      }, {
        name: "吉隆坡",
        value: 100
      }],
      [{
        name: "吉隆坡"
      }, {
        name: "科伦坡",
        value: 100
      }],
      [{
        name: "吉大港"
      }, {
        name: "班加罗尔",
        value: 100
      }],
      [{
        name: "班加罗尔"
      }, {
        name: "科伦坡",
        value: 100
      }],
      [{
        name: "科伦坡"
      }, {
        name: "孟买",
        value: 100
      }],
      [{
        name: "孟买"
      }, {
        name: "迪拜",
        value: 100
      }],
      [{
        name: "迪拜"
      }, {
        name: "吉布提港",
        value: 100
      }],
      [{
        name: "吉布提港"
      }, {
        name: "吉达",
        value: 100
      }],
      [{
        name: "吉达"
      }, {
        name: "亚历山大",
        value: 100
      }],
      [{
        name: "亚历山大"
      }, {
        name: "比雷埃夫斯",
        value: 100
      }],
      [{
        name: "比雷埃夫斯"
      }, {
        name: "里斯本",
        value: 100
      }],
      [{
        name: "上海"
      }, {
        name: "釜山",
        value: 100
      }],
      [{
        name: "釜山"
      }, {
        name: "北太平洋",
        value: 100
      }]

    ];
    //新亚欧大陆桥
    let XNData = [
      [{
        name: "杭州"
      }, {
        name: "西安",
        value: 100
      }],
      [{
        name: "西安"
      }, {
        name: "乌鲁木齐",
        value: 100
      }],
      [{
        name: "乌鲁木齐"
      }, {
        name: "莫斯科",
        value: 100
      }],
      [{
        name: "莫斯科"
      }, {
        name: "布列斯特",
        value: 100
      }],
      [{
        name: "布列斯特"
      }, {
        name: "华沙",
        value: 100
      }],
      [{
        name: "华沙"
      }, {
        name: "柏林",
        value: 100
      }],
      [{
        name: "柏林"
      }, {
        name: "伦敦",
        value: 100
      }],
      [{
        name: "乌鲁木齐"
      }, {
        name: "阿拉木图",
        value: 100
      }],
      [{
        name: "阿拉木图"
      }, {
        name: "塔什干",
        value: 100
      }],
      [{
        name: "塔什干"
      }, {
        name: "德黑兰",
        value: 100
      }],
      [{
        name: "德黑兰"
      }, {
        name: "安卡拉",
        value: 100
      }],
      [{
        name: "安卡拉"
      }, {
        name: "伊斯坦布尔",
        value: 100
      }]

    ];
    //中蒙俄经济走廊
    let YCData = [
      [{
        name: "哈巴罗夫斯克"
      }, {
        name: "伊尔库茨克",
        value: 100
      }],
      [{
        name: "伊尔库茨克"
      }, {
        name: "莫斯科",
        value: 100
      }],
      [{
        name: "莫斯科"
      }, {
        name: "圣彼得堡",
        value: 100
      }],
      [{
        name: "符拉迪沃斯托克"
      }, {
        name: "伊尔库茨克",
        value: 100
      }],
      [{
        name: "北京"
      }, {
        name: "乌兰巴托",
        value: 100
      }],
      [{
        name: "乌兰巴托"
      }, {
        name: "伊尔库茨克",
        value: 100
      }]
    ];

    let planePath =
      "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  
    let convertData = function (data) {
      let res = [];
      for (let i = 0; i < data.length; i++) {
        let dataItem = data[i];

        let fromCoord = geoCoordMap[dataItem[0].name];
        let toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
          res.push({
            fromName: dataItem[0].name,
            toName: dataItem[1].name,
            coords: [fromCoord, toCoord],
            value: dataItem[1].value
          });
        }
      }
      return res;
    };

    let color = ["#5599FF", "#FF7744", "#9F88FF"]; //航线的颜色
    let root = ["海上丝绸之路", "新亚欧大陆桥", "中蒙俄经济走廊"]//路线名称
    let series = [];
    [
      ["海上丝绸之路", XAData],
      ["新亚欧大陆桥", XNData],
      ["中蒙俄经济走廊", YCData]
    ].forEach(function (item, i) {
      series.push({
        name: item[0],//+ " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "#FFFFFF", //arrow箭头尾迹的颜色
          symbolSize: 3
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2
          }
        },
        data: convertData(item[1])
      }, 
      { //线条系列数据
        name: item[0],// + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"], //标记的图像：箭头
        symbolSize: 10, //标记的大小
        effect: { //线条特效的配置
          show: true,
          period: 6, //特效动画的时间，单位s
          trailLength: 0, //特效尾迹的长度
          symbol: planePath, //特效图形的标记，可选circle
          // symbol: gtPath,

          symbolSize: 15 //特效标记的大小
        },
        lineStyle: { //线条样式
          normal: {
            color: color[i],
            width: 1, //线条宽度
            opacity: 0.6, //尾迹线条透明度
            curveness: 0.2 //尾迹线条曲直度
          }
        },
        data: convertData(item[1])
      },
      {
        name: item[0],// + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke"
        },
        label: {
          normal: {
            show: false, //不显示地名
            position: "right",
            formatter: "{b}"
          }
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i]
          },
          emphasis: {
            areaColor: "#2B91B7"
          }
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
          };
        })
      });
    });
    let option = {
      tooltip: {//提示框
        trigger: "item",//数据项图形触发
      },

      legend: {
        orient: "vertical",
        top: "bottom",
        left: "right",
        data: ["海上丝绸之路 ", "新亚欧大陆桥 ", "中蒙俄经济走廊"],
        textStyle: {
          color: "#000"
        },
        selectedMode: "multiple"
      },
      
      geo: {
        map: "world",
        label: {
          emphasis: {
            show: true, //显示国家名
            color: "#fff"
          }
        },
        // 把世界地图放大了1.2倍
        zoom: 1.5,
        roam: true,
        itemStyle: {
          normal: {
            // 地图省份的背景颜色
            areaColor: "#FFBB66",
            opacity: 0.85,
            borderColor: "#888888",
            borderWidth: 1
          },
          emphasis: {
            areaColor: "#3069a9"
          }
        }
      },
      series: series
    };
    myChart.setOption(option);
    // 监听浏览器缩放，图表对象调用缩放resize函数
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  })();
}

//Builders
console.log("程婧", "胡雨婷", "邵仁杰")