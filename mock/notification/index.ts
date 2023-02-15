import Mock from 'mockjs'
import { GET_NOTIFICATION_LIST } from '~/api/url'

const notificationList = [
  {
    albumUrl: '/src/assets/shh.webp',
    title: '珊瑚海',
    content: '我的脸上始终挟带，一抹浅浅的无奈',
    selected: false
  },
  {
    albumUrl: '/src/assets/qt.webp',
    title: '晴天',
    content: '从前从前，有个人爱你很久，但偏偏，雨渐渐，把距离吹得好远',
    selected: false
  },
  {
    albumUrl: '/src/assets/crbhf.webp',
    title: '超人不会飞',
    content: '就算流年如水，就算心跳一天天慢到疲惫',
    selected: false
  },
  {
    albumUrl: '/src/assets/gj.webp',
    title: '轨迹',
    content: '我会发着呆，然后微微笑，接着紧紧闭上眼',
    selected: false
  },
  {
    albumUrl: '/src/assets/bnsdmm.webp',
    title: '不能说的秘密',
    content: '最美的不是下雨天，是曾与你躲过雨的屋檐',
    selected: false
  },
  {
    albumUrl: '/src/assets/hyrs.webp',
    title: '粉色海洋',
    content: 'Hi～小妞！ 要上我车吗？ 嗯～ 我很帅喔！',
    selected: false
  },
  {
    albumUrl: '/src/assets/bdth.webp',
    title: '半岛铁盒',
    content: '过好一阵子，你就会回来',
    selected: false
  },
]

Mock.mock(RegExp(`${GET_NOTIFICATION_LIST}`), 'get', () => {
  return Mock.mock({
    code: 200, data: {
      data: notificationList
    }, msg: '获取通知数据成功'
  })
})
