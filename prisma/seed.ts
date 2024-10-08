import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    distinctId: 'abc123',
    updatedAt: '2024-09-17T10:00:00Z',
    countryCode: 'US',
    region: 'California',
    city: 'Los Angeles',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    distinctId: 'def456',
    updatedAt: '2024-09-16T09:45:00Z',
    countryCode: 'GB',
    region: 'England',
    city: 'London',
  },
  {
    name: 'Michael Tan',
    email: 'michael.tan@example.com',
    distinctId: 'ghi789',
    updatedAt: '2024-09-15T12:30:00Z',
    countryCode: 'PH',
    region: 'Metro Manila',
    city: 'Makati',
  },
  {
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    distinctId: 'jkl012',
    updatedAt: '2024-09-14T14:20:00Z',
    countryCode: 'AU',
    region: 'Victoria',
    city: 'Melbourne',
  },
  {
    name: 'Carlos Gomez',
    email: 'carlos.gomez@example.com',
    distinctId: 'mno345',
    updatedAt: '2024-09-13T08:50:00Z',
    countryCode: 'MX',
    region: 'Mexico City',
    city: 'Mexico City',
  },
  {
    name: 'Anna Chen',
    email: 'anna.chen@example.com',
    distinctId: 'pqr678',
    updatedAt: '2024-09-12T11:15:00Z',
    countryCode: 'SG',
    region: 'Central Region',
    city: 'Singapore',
  },
  {
    name: 'David Kim',
    email: 'david.kim@example.com',
    distinctId: 'stu901',
    updatedAt: '2024-09-11T16:40:00Z',
    countryCode: 'KR',
    region: 'Seoul',
    city: 'Seoul',
  },
  {
    name: 'Sophia Lee',
    email: 'sophia.lee@example.com',
    distinctId: 'vwx234',
    updatedAt: '2024-09-10T13:00:00Z',
    countryCode: 'JP',
    region: 'Tokyo',
    city: 'Tokyo',
  },
  {
    name: 'Liam Patel',
    email: 'liam.patel@example.com',
    distinctId: 'yzb567',
    updatedAt: '2024-09-09T17:55:00Z',
    countryCode: 'IN',
    region: 'Maharashtra',
    city: 'Mumbai',
  },
  {
    name: 'Olivia Nguyen',
    email: 'olivia.nguyen@example.com',
    distinctId: 'cdf890',
    updatedAt: '2024-09-08T07:10:00Z',
    countryCode: 'VN',
    region: 'Ho Chi Minh',
    city: 'Ho Chi Minh City',
  },
  {
    name: 'Isabella Rossi',
    email: 'isabella.rossi@example.com',
    distinctId: 'efg321',
    updatedAt: '2024-09-07T15:25:00Z',
    countryCode: 'IT',
    region: 'Lombardy',
    city: 'Milan',
  },
  {
    name: 'Lucas Silva',
    email: 'lucas.silva@example.com',
    distinctId: 'hij654',
    updatedAt: '2024-09-06T09:05:00Z',
    countryCode: 'BR',
    region: 'São Paulo',
    city: 'São Paulo',
  },
  {
    name: 'Ethan White',
    email: 'ethan.white@example.com',
    distinctId: 'klm987',
    updatedAt: '2024-09-05T18:30:00Z',
    countryCode: 'CA',
    region: 'Ontario',
    city: 'Toronto',
  },
  {
    name: 'Amelia Johnson',
    email: 'amelia.johnson@example.com',
    distinctId: 'nop432',
    updatedAt: '2024-09-04T07:45:00Z',
    countryCode: 'ZA',
    region: 'Gauteng',
    city: 'Johannesburg',
  },
  {
    name: 'Alexander Brown',
    email: 'alexander.brown@example.com',
    distinctId: 'qrs765',
    updatedAt: '2024-09-03T14:55:00Z',
    countryCode: 'NZ',
    region: 'Auckland',
    city: 'Auckland',
  },
  {
    name: 'Charlotte Thompson',
    email: 'charlotte.thompson@example.com',
    distinctId: 'tuv098',
    updatedAt: '2024-09-02T10:35:00Z',
    countryCode: 'DE',
    region: 'Bavaria',
    city: 'Munich',
  },
  {
    name: 'Daniel Garcia',
    email: 'daniel.garcia@example.com',
    distinctId: 'wxy321',
    updatedAt: '2024-09-01T11:00:00Z',
    countryCode: 'ES',
    region: 'Madrid',
    city: 'Madrid',
  },
  {
    name: 'Ava Wilson',
    email: 'ava.wilson@example.com',
    distinctId: 'zab654',
    updatedAt: '2024-08-31T13:20:00Z',
    countryCode: 'US',
    region: 'Texas',
    city: 'Houston',
  },
  {
    name: 'Sebastian Martinez',
    email: 'sebastian.martinez@example.com',
    distinctId: 'cde987',
    updatedAt: '2024-08-30T12:45:00Z',
    countryCode: 'AR',
    region: 'Buenos Aires',
    city: 'Buenos Aires',
  },
  {
    name: 'Mia Hernandez',
    email: 'mia.hernandez@example.com',
    distinctId: 'fgh210',
    updatedAt: '2024-08-29T14:10:00Z',
    countryCode: 'CO',
    region: 'Bogota',
    city: 'Bogota',
  },
]

async function seedData() {
  console.log('Seeding...')

  for (const user of users) {
    const result = await prisma.user.create({
      data: user,
    })
    console.log(`Created user with id: ${result.distinctId}`)
  }

  console.log('Finished seeding.')
}

seedData()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
