import Mock from 'mockjs'
import { GET_DEFORMATION_DATA } from '~/api/url'

const citiesName = ['江苏', '黑龙江', '内蒙古', '吉林', '北京', '辽宁', '河北', '天津', '山西', '陕西', '甘肃', '宁夏', '青海', '新疆', '四川', '重庆', '山东', '河南', '安徽', '湖北', '浙江', '福建', '江西', '湖南', '贵州', '云南', '广东', '广西', '海南', '上海', '西藏', '台湾']

const generateData = () => {
  return citiesName.map(name => {
    return {
      name,
      value: '@natural(2000, 10000)'
    }
  })
}

Mock.mock(RegExp(`${GET_DEFORMATION_DATA}`), 'get', () => {
  return Mock.mock({
    code: 200,
    data: generateData(),
    msg: '获取地图数据成功'
  })
})
