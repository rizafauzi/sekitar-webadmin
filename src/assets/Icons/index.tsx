import React from 'react'
import { IconTypes, Properties } from './type'

// Common
import ChevronDownIcon from './common/icon_chevron_down'

// Menu
import MegaphoneIcon from './menu/icon_megaphone'

const iconTypes: IconTypes = {
  'chevron-down': ChevronDownIcon,
  megaphone: MegaphoneIcon
}

const MyIcon = (props: Properties): React.ReactElement<Properties | Element> => {
  const { name } = props
  const Icon = iconTypes[name]

  if (name && iconTypes[name]) {
    return <Icon {...props} />
  }
  return <div />
}

export default MyIcon
