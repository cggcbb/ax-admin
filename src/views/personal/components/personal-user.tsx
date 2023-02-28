import { NCard, NAvatar, NSpace, NEl, NTag } from 'naive-ui'
import { GET_PERSONAL } from '~/api/url'
import { IPersonal } from '~/types/common'
import { get } from '~/utils/http'

export default defineComponent({
  name: 'PersonalUser',

  setup() {
    let personalUser = $ref<IPersonal>()

    onMounted(async () => {
      const res = await get<IPersonal>(GET_PERSONAL)
      personalUser = res.data
    })

    return () => (
      <>
        <NCard style="min-height: 400px">
          <NSpace justify="center">
            <NAvatar bordered round size={120} src={personalUser?.avatarUrl} />
          </NSpace>
          <NSpace justify="center" class="mt-1">
            <span class="text-6">{personalUser?.name}</span>
          </NSpace>
          <NSpace justify="center">
            <span>{personalUser?.motto}</span>
          </NSpace>
          <NEl class="mt-3 w-100% ma-auto">
            {personalUser?.content.map((item, index) => (
              <NEl class={['center-layout', index !== 0 ? 'mt-2' : '']}>
                <span class="w-45% inline-block text-right">{item.key}：</span>
                <span class="w-55%">{item.value}</span>
              </NEl>
            ))}
          </NEl>
          <NSpace justify="center" class="mt-5">
            {personalUser?.tags.map(item => (
              <NTag type={item.type}>{item.text}</NTag>
            ))}
          </NSpace>
        </NCard>
      </>
    )
  }
})
