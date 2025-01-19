require('dotenv').config()

console.log('Database URL:', process.env.NEXT_PUBLIC_DB_CONNECTION_STRING)

/** @type { import {"drizzle-kit"}.Config } */
export default {
  dialect: 'postgresql',
  schema: './configs/schema.jsx',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_CONNECTION_STRING,
  },
}
