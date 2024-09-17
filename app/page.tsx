import { columns } from './columns'
import { users } from './data'
import { DataTable } from './data-table'
import CustomQueryBuilder from './query-builder'

export default function Home() {
  return (
    <div className='dark space-y-10 px-20 py-10'>
      <CustomQueryBuilder />
      <DataTable columns={columns} data={users} />
    </div>
  )
}
