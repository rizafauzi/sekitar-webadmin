import React from 'react'
import { IconTypes, Properties } from './type'

// Common
import BoldIcon from './common/icon_bold'
import ChevronDownIcon from './common/icon_chevron_down'
import CloseIcon from './common/icon_close'
import ItalicIcon from './common/icon_italic'
import BulletsListIcon from './common/icon_bullets_list'
import UnderlineIcon from './common/icon_underline'

// Menu
import MegaphoneIcon from './menu/icon_megaphone'

const iconTypes: IconTypes = {
  bold: BoldIcon,
  'bullets-list': BulletsListIcon,
  'chevron-down': ChevronDownIcon,
  close: CloseIcon,
  italic: ItalicIcon,
  megaphone: MegaphoneIcon,
  underline: UnderlineIcon
}

const Icons = (props: Properties): React.ReactElement<Properties | Element> => {
  const { name } = props
  const Icon = iconTypes[name]

  if (name && iconTypes[name]) {
    return <Icon {...props} />
  }
  return <div />
}

export default Icons
