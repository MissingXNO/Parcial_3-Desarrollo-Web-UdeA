import dotenv from 'dotenv';

dotenv.config();

export default {
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL
};
