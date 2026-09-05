/**
 * 精密指挥台 · ECharts 深色主题注册（安全版）
 * 零DOM操作，仅注册 ECharts 主题
 * CSS 需通过 index.html 的 <link> 标签手动引入
 */
(function () {
  'use strict';

  var CC_THEME = {
    name: 'command-center',
    color: [
      '#00d4ff', '#388bfd', '#8b5cf6', '#10b981',
      '#f59e0b', '#ef4444', '#ec4899', '#6366f1',
      '#14b8a6', '#f97316', '#06b6d4', '#a855f7'
    ],
    backgroundColor: 'transparent',
    textStyle: { color: '#94a3b8', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Mono", "Consolas", "PingFang SC", "Microsoft YaHei", sans-serif' },
    title: { textStyle: { color: '#e2e8f0', fontSize: 15, fontWeight: 700 }, subtextStyle: { color: '#64748b', fontSize: 12 } },
    legend: { textStyle: { color: '#94a3b8', fontSize: 12 }, pageTextStyle: { color: '#64748b' }, pageIconColor: '#00d4ff', pageIconInactiveColor: '#33405a' },
    tooltip: {
      backgroundColor: 'rgba(10, 15, 26, 0.95)',
      borderColor: 'rgba(0, 212, 255, 0.2)',
      borderWidth: 1,
      textStyle: { color: '#e2e8f0', fontSize: 12 },
      extraCssText: 'box-shadow: 0 0 16px rgba(0,212,255,0.15); border-radius: 8px; backdrop-filter: blur(8px);'
    },
    categoryAxis: {
      axisLine: { lineStyle: { color: 'rgba(0, 212, 255, 0.12)' } },
      axisTick: { lineStyle: { color: 'rgba(0, 212, 255, 0.08)' } },
      axisLabel: { color: '#64748b', fontSize: 11 },
      splitLine: { lineStyle: { color: 'rgba(0, 212, 255, 0.04)' } }
    },
    valueAxis: {
      axisLine: { lineStyle: { color: 'rgba(0, 212, 255, 0.12)' } },
      axisTick: { lineStyle: { color: 'rgba(0, 212, 255, 0.08)' } },
      axisLabel: { color: '#64748b', fontSize: 11 },
      splitLine: { lineStyle: { color: 'rgba(0, 212, 255, 0.06)', type: 'dashed' } }
    },
    radar: {
      name: { textStyle: { color: '#94a3b8', fontSize: 11 } },
      axisLine: { lineStyle: { color: 'rgba(0, 212, 255, 0.1)' } },
      splitLine: { lineStyle: { color: 'rgba(0, 212, 255, 0.06)' } },
      splitArea: { areaStyle: { color: ['rgba(0, 212, 255, 0.02)', 'rgba(0, 212, 255, 0.04)'] } }
    },
    gauge: {
      axisLine: { lineStyle: { color: [[0.2, '#ef4444'], [0.4, '#f59e0b'], [0.6, '#388bfd'], [0.8, '#10b981'], [1, '#00d4ff']] } },
      axisTick: { lineStyle: { color: 'rgba(0, 212, 255, 0.15)' } },
      axisLabel: { color: '#64748b', fontSize: 10 },
      pointer: { itemStyle: { color: '#00d4ff' } },
      detail: { color: '#e2e8f0', fontSize: 18, fontWeight: 700, fontFamily: '"SF Mono", "Consolas", monospace' }
    },
    line: { itemStyle: { borderWidth: 2 }, lineStyle: { width: 2 }, symbolSize: 6, symbol: 'circle', smooth: true },
    bar: { itemStyle: { barBorderWidth: 0, barBorderColor: 'rgba(0, 212, 255, 0.2)' }, emphasis: { itemStyle: { barBorderColor: '#00d4ff', barBorderWidth: 1, shadowBlur: 12, shadowColor: 'rgba(0, 212, 255, 0.3)' } } },
    pie: { itemStyle: { borderColor: 'rgba(10, 15, 26, 0.8)', borderWidth: 2 } }
  };

  function registerTheme() {
    if (typeof echarts !== 'undefined' && echarts.registerTheme) {
      echarts.registerTheme('command-center', CC_THEME);
    }
  }

  registerTheme();
})();