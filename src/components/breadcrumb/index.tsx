import useBreadcrumb from './useBreadcrumb'
import { ChevronDownOutline as BreadcrumbIcon } from '@vicons/ionicons5'
import { NBreadcrumb, NBreadcrumbItem, NDropdown, NEl, NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { TransitionGroup } from 'vue'

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const { breadcrumbList, handleBreadcrumbSelect } = useBreadcrumb()

    return () => (
      <NBreadcrumb>
        <TransitionGroup name="breadcrumb">
          {breadcrumbList.value.map(item => (
            <NBreadcrumbItem key={item.key}>
              {item.children?.length ? (
                <NDropdown options={item.children} onSelect={handleBreadcrumbSelect as any}>
                  <NEl class="trigger">
                    {item.label}
                    <NIcon size={14} component={BreadcrumbIcon} />
                  </NEl>
                </NDropdown>
              ) : item.key === 'dashboard' ? (
                <RouterLink to={item.path}>{item.label}</RouterLink>
              ) : (
                <span>{item.label}</span>
              )}
            </NBreadcrumbItem>
          ))}
        </TransitionGroup>
      </NBreadcrumb>
    )
  }
})
