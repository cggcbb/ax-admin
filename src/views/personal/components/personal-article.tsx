import { NCard, NCollapse, NCollapseItem, NGradientText, NEl } from 'naive-ui'
import { IPersonalArticle } from '~/types/common'

type personalArticle = {
  data: IPersonalArticle[]
}

export default function personalArticle(props: personalArticle) {
  return (
    <NCard bordered={false}>
      <NCollapse accordion arrow-placement="right" defaultExpandedNames={[0]}>
        {props.data?.map(item => (
          <NCollapseItem title={item.title} name={item.key}>
            {{
              default: () => (
                <NEl>
                  {item.content.map((c, index) => (
                    <NEl class={index !== 0 ? 'mt-16px' : ''}>
                      <NGradientText style="white-space: normal">{c}</NGradientText>
                    </NEl>
                  ))}
                </NEl>
              ),
              'header-extra': () => item.author
            }}
          </NCollapseItem>
        ))}
      </NCollapse>
    </NCard>
  )
}
