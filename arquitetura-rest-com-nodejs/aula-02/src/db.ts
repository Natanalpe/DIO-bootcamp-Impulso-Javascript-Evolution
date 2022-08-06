import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config()
const connectionString = process.env.DATABASE_URL_CONNECTION;

const db = new Pool({ connectionString });

export default db;