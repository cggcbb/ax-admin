import Mock from 'mockjs'
import { GET_CHINA_MAP_DATA, GET_CHINA_MAP_FEATURE_COLLECTION } from '~/api/url'
import featureCollection from './map.json'

// line 中心坐标
const geoGpsMap = {
  // 北京坐标
  1: [116.4551, 40.2539],
  // 上海
  2: [121.4648, 31.2891],
  // 深圳
  3: [113.12244, 23.009505],
  // 成都
  4: [102.9526, 30.5617],
  // 杭州
  5: [120.2313, 29.1773],
  // 拉萨
  6: [87.7179, 31.4312]
} as any

// line 发散坐标
const geoCoordMap = {
  江苏: [119.8062, 32.9208],
  黑龙江: [127.9688, 47.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [126.1154, 43.7584],
  北京: [116.4551, 40.2539],
  辽宁: [122.6238, 41.2216],
  河北: [114.9995, 38.0006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [105.5586, 37.1775],
  青海: [95.4038, 35.4107],
  新疆: [84.9236, 42.3883],
  四川: [102.9526, 30.5617],
  重庆: [107.5843, 30.1397],
  山东: [118.2582, 36.3701],
  河南: [113.4668, 34.1234],
  安徽: [117.29, 32.0581],
  湖北: [112.1896, 30.8628],
  浙江: [120.2313, 29.1773],
  福建: [118.4543, 25.9222],
  江西: [115.8046, 27.4633],
  湖南: [111.0823, 27.6568],
  贵州: [106.6992, 26.7682],
  云南: [101.9199, 25.0663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [109.6893, 19.2516],
  上海: [121.4648, 31.2891],
  西藏: [87.7179, 31.4312],
  台湾: [120.9858, 23.8404]
} as any

const citiesName = ['江苏', '黑龙江', '内蒙古', '吉林', '北京', '辽宁', '河北', '天津', '山西', '陕西', '甘肃', '宁夏', '青海', '新疆', '四川', '重庆', '山东', '河南', '安徽', '湖北', '浙江', '福建', '江西', '湖南', '贵州', '云南', '广东', '广西', '海南', '上海', '西藏', '台湾']

/**
 *
 * 生成mock格式的对象，随机min(2000), max(10000)中取值
 * const obj = {
 *   '北京': @natural(2000, 10000)
 * }
 *
 * ==>
 *
 * {
 *   '北京': 9240
 * }
 *
 */
const generateData = (center: string) => {
  const res: any = {}
  for (const name of citiesName) {
    res[name] = '@natural(2000, 10000)'
  }
  // 让中心点数据相对最大, effectScatter图看起来才没那么怪异
  res[center] = '@natural(20000, 32000)'
  return res
}

// 和上面line中心坐标对应
const cities = ['北京', '上海', '深圳', '成都', '杭州', '拉萨']

Mock.mock(RegExp(`${GET_CHINA_MAP_DATA}`), 'get', function () {
  return Mock.mock({
    code: 200, data: {
      geoGpsMap,
      geoCoordMap,
      d1: generateData('北京'),
      d2: generateData('上海'),
      d3: generateData('广东'),
      d4: generateData('四川'),
      d5: generateData('浙江'),
      d6: generateData('西藏'),
      cities
    }, msg: '获取地图数据成功'
  })
})

Mock.mock(RegExp(`${GET_CHINA_MAP_FEATURE_COLLECTION}`), 'get', function () {
  return Mock.mock({
    code: 200, data: featureCollection, msg: '获取地图FeatureCollection数据成功'
  })
})
