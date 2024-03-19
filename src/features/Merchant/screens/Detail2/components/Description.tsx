const Description = ({ data }: { data: string }) => (
  <div>
    <div className="text-lg font-semibold">Deskripsi Toko</div>
    <div className="border-b-2 py-6">{data}</div>
  </div>
)

export default Description
