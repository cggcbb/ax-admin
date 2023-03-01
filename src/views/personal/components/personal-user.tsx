import { NCard, NAvatar, NSpace, NEl, NTag } from 'naive-ui'
import { IPersonal } from '~/types/common'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'PersonalUser',
  props: {
    data: Object as PropType<IPersonal>
  },
  setup(props) {
    return () => (
      <>
        <NCard style="min-height: 400px" bordered={false}>
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
        </NCard>
      </>
    )
  }
})
