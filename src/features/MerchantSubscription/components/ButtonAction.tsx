import Button from '@components/atoms/Button'

const ButtonAction = () => {
  // eslint-disable-next-line unicorn/consistent-function-scoping
  const handleAction = () => console.info('Clicked')
  return (
    <Button variant="secondary" onClick={handleAction}>
      Selesai
    </Button>
  )
}

export default ButtonAction
