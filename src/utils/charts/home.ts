import echarts from '@/plugins/echarts'

export const useLineCharts = (id: string) => {
  const myChart = echarts.init(document.getElementById(id))
  myChart.setOption({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      left: '3%',
      right: '3%'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['用户注册数', '用户活跃数']
    },
    series: [
      {
        name: '用户注册数',
        data: [111, 135, 212, 142, 222, 253, 312],
        type: 'line',
        smooth: true,
      },
      {
        name: '用户活跃数',
        data: [80, 111, 135, 142, 200, 111, 222],
        type: 'line',
        smooth: true
      }
    ]
  })
}

export const usePieCharts = (id: string) => {
  const myChart = echarts.init(document.getElementById(id))
  myChart.setOption({
    title: {
      text: '文章分类数量'
    },
    legend: {
      top: 'bottom'
    },
    tooltip: {},
    series: [
      {
        type: 'pie',
        height: '90%',
        data: [
          { value: 30, name: 'Web前端' },
          { value: 18, name: '服务端相关' },
          { value: 2, name: '数据库' },
          { value: 22, name: '生活日常' },
          { value: 21, name: '个人分享' },
        ]
      }
    ]
  })
}

export const useBarCharts = (id: string) => {
  const myChart = echarts.init(document.getElementById(id))
  myChart.setOption({
    title: {
      text: '标签分类数量'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['HTML/CSS', 'JavaScript', 'Vue', 'Node', '游戏', '影视', '音乐'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '文章数量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  })
}