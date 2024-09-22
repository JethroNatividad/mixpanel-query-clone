'use client'
import React, { useEffect, useState } from 'react'
import { getUsers } from '@/lib/actions/users'
import { columns } from '../components/columns'
import { DataTable } from '../components/data-table'
import CustomQueryBuilder from '../components/query-builder'
import { Field, formatQuery, RuleGroupType } from 'react-querybuilder'
import { User } from '@prisma/client'

const fields: Field[] = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'distinctId', label: 'Distinct ID' },
  { name: 'updatedAt', label: 'Updated At', inputType: 'date' },
  { name: 'countryCode', label: 'Country Code' },
  { name: 'region', label: 'Region' },
  { name: 'city', label: 'City' },
]

export default function Home() {
  const [query, setQuery] = useState<RuleGroupType>({
    combinator: 'and',
    rules: [{ field: 'name', operator: '=', value: 'Steve' }],
  })

  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const rawQuery = formatQuery(query, 'sql')
      const users = await getUsers(rawQuery)
      setUsers(users)
    }
    fetchUsers()
  }, [query])

  return (
    <div className='space-y-10 px-20 py-10'>
      <CustomQueryBuilder
        fields={fields}
        onQueryChange={setQuery}
        query={query}
      />
      <DataTable columns={columns} data={users} />
    </div>
  )
}
