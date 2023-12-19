import * as React from 'react'

export interface useDisclosureProperties {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

function useDisclosure({ open = false }: { open: boolean }): useDisclosureProperties {
  const [isOpen, setIsOpen] = React.useState<boolean>(open)

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)
  const onToggle = () => setIsOpen(value => !value)

  return { isOpen, onOpen, onClose, onToggle }
}

export default useDisclosure
