import React from 'react'
import {
  Field,
  formatQuery,
  QueryBuilder,
  RuleGroupType,
} from 'react-querybuilder'
import 'react-querybuilder/dist/query-builder.css'

type Props = {
  fields: Field[]
  query: RuleGroupType
  onQueryChange: (query: RuleGroupType) => void
}

const CustomQueryBuilder = ({ fields, query, onQueryChange }: Props) => {
  return (
    <div className='space-y-6'>
      <div className='[&>div>div]:rounded-lg [&>div>div]:border-border [&>div>div]:bg-background [&_input]:bg-muted [&_select]:bg-muted'>
        <QueryBuilder
          fields={fields}
          query={query}
          onQueryChange={onQueryChange}
        />
      </div>

      <pre>{formatQuery(query, 'sql')}</pre>
    </div>
  )
}

export default CustomQueryBuilder
