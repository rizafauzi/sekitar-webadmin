// import { useHistory } from 'react-router-dom'
import { ITabItems } from './Tab.type'
import './index.css'

interface IProperties {
  handleChangeTab: (data: number) => void
  section: number
  items: ITabItems[]
}

const TabComponent = ({ section, handleChangeTab, items }: IProperties) => {
  // const history = useHistory()

  // console.log('section', section)
  const handleChangeSection = (data: number) => {
    // history.push('/order')
    setTimeout(() => {
      handleChangeTab(data)
    }, 300)
  }

  return (
    <div className="flex gap-4">
      {items.map(item => (
        <button
          type="button"
          className={section === item.id ? 'active' : ''}
          onClick={() => handleChangeSection(item.id)}
        >
          <div>{item.title}</div>
        </button>
      ))}
    </div>
  )
}

export default TabComponent
