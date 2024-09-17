'use client'

import { ColumnDef } from '@tanstack/react-table'

export type User = {
  name: string
  email: string
  distinctId: string
  updatedAt: string
  countryCode: string
  region: string
  city: string
}

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
