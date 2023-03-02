import { NCard, NAvatar, NSpace, NEl, NTag, NTimeline, NTimelineItem } from 'naive-ui'
import { IPersonalUser } from '~/types/common'

type personalUserProps = {
  data: IPersonalUser
}

/**
 * 函数式组件
 * 函数式组件在渲染过程中不会创建组件实例 (也就是说，没有 this)，也不会触发常规的组件生命周期钩子。
 * 该函数实际上就是render函数。
 */
export default function personalUser(props: personalUserProps) {
  return (
    <NCard style="min-height: 450px" bordered={false}>
      <NSpace justify="center">
        <NAvatar bordered round size={120} src={props.data?.avatarUrl} />
      </NSpace>
      <NSpace justify="center" class="mt-1">
        <span class="text-6">{props.data?.name}</span>
      </NSpace>
      <NSpace justify="center">
        <span>{props.data?.motto}</span>
      </NSpace>
      <NEl class="mt-3 w-100% ma-auto">
        {props.data?.content.map((item, index) => (
          <NEl class={['center-layout', index !== 0 ? 'mt-2' : '']}>
            {item.key}：{item.value}
          </NEl>
        ))}
      </NEl>
      <NSpace justify="center" class="mt-5">
        {props.data?.tags.map(item => (
          <NTag type={item.type}>{item.text}</NTag>
        ))}
      </NSpace>
      <NSpace justify="center" class="mt-5">
        <NTimeline horizontal>
          {props.data?.timeLine.map((item, index) => (
            <NTimelineItem
              type={item.type}
              title={item.text}
              style={index === props.data.timeLine.length - 1 ? 'paddingRight: 0' : ''}
            />
          ))}
        </NTimeline>
      </NSpace>
    </NCard>
  )
}
