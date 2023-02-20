import {
  HomeOutline as HomeIcon,
  SearchOutline as SearchIcon,
  NotificationsOutline as BellIcon,
  SettingsOutline as SettingIcon,
  ExpandOutline as ExpandOutIcon,
  ContractOutline as ContractOutIcon,
  RefreshOutline as RefreshIcon
} from '@vicons/ionicons5'

export interface INIconTransform {
  [key: string]: any
}

export const NIconTransform: INIconTransform = {
  'n-icon-home': HomeIcon,
  'n-icon-search': SearchIcon,
  'n-icon-bell': BellIcon,
  'n-icon-setting': SettingIcon,
  'n-icon-expand-out': ExpandOutIcon,
  'n-icon-contract-out': ContractOutIcon,
  'n-icon-refresh': RefreshIcon
}
