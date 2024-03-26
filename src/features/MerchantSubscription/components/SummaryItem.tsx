// import { Card } from 'antd'

interface ISummaryItem {
  title: string
  amount: number
}
const SummaryItem = ({ title, amount }: ISummaryItem) => (
  <div className="flex flex-col gap-2 text-center w-full py-2 bg-white rounded-lg border boder-[#E0E0E0]">
    <div className="text-[#BDBDBD]">{title}</div>
    <div className="text-2xl text-[#333333] font-bold ">{amount}</div>
  </div>
)

export default SummaryItem
