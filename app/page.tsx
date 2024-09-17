import { columns } from './columns'
import { users } from './data'
import { DataTable } from './data-table'

export default function Home() {
  return (
    <div className='px-20 py-10'>
      <DataTable columns={columns} data={users} />
    </div>
  )
}
