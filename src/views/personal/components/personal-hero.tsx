import { NCard, NAvatar, NThing, NGrid, NGi } from 'naive-ui'
import { IPersonalHero } from '~/types/common'

type personalHero = {
  data: IPersonalHero[]
}

export default function personalArticle(props: personalHero) {
  return (
    <NCard style="min-height: 450px" bordered={false}>
      <NGrid xGap={12} yGap={12} cols="2" responsive={'screen'}>
        {props.data?.map(item => (
          <NGi>
            <NCard>
              <NThing>
                {{
                  avatar: () => <NAvatar size="large" src={item.avatarUrl} />,
                  header: () => item.name,
                  'header-extra': () => <NAvatar size={14} src={item.avatarUrl} />,
                  description: () => item.desc,
                  default: () => item.skills.join(' / ')
                }}
              </NThing>
            </NCard>
          </NGi>
        ))}
      </NGrid>
    </NCard>
  )
}
