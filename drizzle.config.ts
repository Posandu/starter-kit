import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';

const check = (condition: boolean, message: string) =>
	condition || (console.error(message), process.exit(1));

check(config().error === undefined, 'Error loading .env file');
check(process.env.DB_URL !== undefined, 'DB_URL not found in .env file');

export default defineConfig({
	schema: './src/lib/db/schema.ts',
	driver: 'libsql',
	dbCredentials: {
		url: process.env.DB_URL!
	},
	verbose: true,
	strict: true
});
