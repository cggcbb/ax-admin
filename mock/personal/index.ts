import Mock, { Random } from 'mockjs'
import { GET_PERSONAL } from '~/api/url'

const tagsType = ['primary', 'info', 'success', 'warning', 'error']

const tagsText = [
  ['有一只', '猫的名字', '叫做', '啾咪'],
  ['我于', '杀戮之中盛放', '亦如', '黎明中的花朵'],
  ['有时候', '你需要', '亲手', '打开一扇门'],
  ['此身', '此时', '此地']
]
const createTagList = () => {
  return tagsText.map(it => {
    return it.map(text => {
      return {
        type: Random.pick(tagsType),
        text
      }
    })
  })
}

const createPersonalUser = () => {
  return {
    avatarUrl: '/src/assets/avatar.png',
    name: 'Mine Mine',
    motto: '我在杀你的路上，带了一枝玫瑰花',
    content: [
      {
        key: '昵称',
        value: '树深时见鹿'
      },
      {
        key: '特点',
        value: '很懒，很赖'
      },
      {
        key: '生日',
        value: '2000-09-24'
      }
    ],
    tags: Random.pick(createTagList())
  }
}

Mock.mock(RegExp(`${GET_PERSONAL}`), 'get', () => {
  return Mock.mock({
    code: 200,
    data: createPersonalUser(),
    msg: '获取个人中心数据成功'
  })
})
