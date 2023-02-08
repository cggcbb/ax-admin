import Mock from 'mockjs'
import { GET_ALBUM_DATA_LIST } from '~/api/url'

const albumList = [
  {
    album: '认了吧',
    songName: '好久不见',
    singer: '陈奕迅 Eason',
    albumUrl: '/src/assets/rlb.webp',
    date: '2007年04月24日',
    content: {
      one: '我多么想和你见一面',
      two: '看看你最近改变'
    },
  },
  {
    album: '我很忙',
    songName: '蒲公英的约定',
    singer: '周杰伦 Jay',
    albumUrl: '/src/assets/whm.jpeg',
    date: '2007年11月02日',
    content: {
      one: '与你聊不完的曾经 而我已经分不清',
      two: '你是友情 还是错过的爱情'
    },
  },
  {
    album: '后 · 青春期的诗',
    songName: '如烟',
    singer: '五月天 Mayday',
    albumUrl: '/src/assets/hqcqds.jpeg',
    date: '2008年10月23日',
    content: {
      one: '七岁的那一年 抓住那只蝉',
      two: '以为能抓住夏天'
    },
  },
  {
    album: '延长比赛',
    songName: '岚',
    singer: '呂建忠 Tank',
    albumUrl: '/src/assets/ycbs.jpeg',
    date: '2007年01月19日',
    content: {
      one: '你是否偶尔 像我靜靜怀念',
      two: '岚一样的愛 倾盆的那一年'
    },
  }
]

Mock.mock(RegExp(`${GET_ALBUM_DATA_LIST}`), 'get', () => {
  return Mock.mock({
    code: 200, data: {
      data: albumList
    }, msg: '获取专辑数据成功'
  })
})
