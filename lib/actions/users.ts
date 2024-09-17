'use server'

import { User } from '@prisma/client'
import prisma from '../db'

export async function getUsers(rawQuery: string) {
  return await prisma.$queryRawUnsafe<User[]>(
    `SELECT * FROM User WHERE ${rawQuery}`
  )
}
