// import { useHistory } from 'react-router-dom'
import './index.css'

interface IProperties {
  setSection: (data: number) => void
  section: number
}

const TabComponent = ({ section, setSection }: IProperties) => {
  // const history = useHistory()

  // console.log('section', section)
  const handleChangeSection = (data: number) => {
    // history.push('/order')
    setTimeout(() => {
      setSection(data)
    }, 300)
  }

  return (
    <div className="flex gap-4">
      <button
        type="button"
        className={section === 1 ? 'active' : ''}
        onClick={() => handleChangeSection(1)}
      >
        <div>Semua</div>
      </button>
      <button
        type="button"
        className={section === 2 ? 'active' : ''}
        onClick={() => handleChangeSection(2)}
      >
        <div>Aktif</div>
      </button>
      <button
        type="button"
        className={section === 3 ? 'active' : ''}
        onClick={() => handleChangeSection(3)}
      >
        <div>Menengah</div>
      </button>
      <button
        type="button"
        className={section === 4 ? 'active' : ''}
        onClick={() => handleChangeSection(4)}
      >
        <div>Tidak Aktif</div>
      </button>
    </div>
  )
}

export default TabComponent
