import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { DB_URL } from '$env/static/private';
import * as schema from './schema';

const connection = createClient({
	url: DB_URL
});

const db = drizzle(connection, { schema });

export { db, connection };
