import { getUsers } from '@/lib/actions/users'
import { columns } from './columns'
// import { users } from './data'
import { DataTable } from './data-table'
import CustomQueryBuilder from './query-builder'

export default async function Home() {
  const users = await getUsers('1 = 1')
  return (
    <div className='dark space-y-10 px-20 py-10'>
      <CustomQueryBuilder />
      <DataTable columns={columns} data={users} />
    </div>
  )
}
