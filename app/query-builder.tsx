'use client'

import React, { useState } from 'react'
import {
  Field,
  formatQuery,
  QueryBuilder,
  RuleGroupType,
} from 'react-querybuilder'
import 'react-querybuilder/dist/query-builder.css'

const fields: Field[] = [
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
  { name: 'distinctId', label: 'Distinct ID' },
  { name: 'updatedAt', label: 'Updated At', inputType: 'date' },
  { name: 'countryCode', label: 'Country Code' },
  { name: 'region', label: 'Region' },
  { name: 'city', label: 'City' },
]

const CustomQueryBuilder = () => {
  const [query, setQuery] = useState<RuleGroupType>({
    combinator: 'and',
    rules: [],
  })

  return (
    <div className='space-y-6'>
      <div className='[&>div>div]:rounded-lg [&>div>div]:border-border [&>div>div]:bg-background [&_input]:bg-muted [&_select]:bg-muted'>
        <QueryBuilder fields={fields} query={query} onQueryChange={setQuery} />
      </div>

      <pre>{formatQuery(query, 'sql')}</pre>
    </div>
  )
}

export default CustomQueryBuilder
