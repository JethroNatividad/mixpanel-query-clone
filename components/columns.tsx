'use client'

import { User } from '@prisma/client'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<User>[] = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Distinct ID',
    accessorKey: 'distinctId',
  },
  {
    header: 'Updated At',
    accessorKey: 'updatedAt',
  },
  {
    header: 'Country Code',
    accessorKey: 'countryCode',
  },
  {
    header: 'Region',
    accessorKey: 'region',
  },
  {
    header: 'City',
    accessorKey: 'city',
  },
]
