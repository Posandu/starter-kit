import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { LibSQLAdapter } from '@lucia-auth/adapter-sqlite';
import { connection } from '$lib/db';
import { Google } from 'arctic';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI } from '$env/static/private';
import type { user } from '$lib/db/schema';

export const google = new Google(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REDIRECT_URI);

const adapter = new LibSQLAdapter(connection, {
	user: 'user',
	session: 'session'
});

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	getUserAttributes: ({ email }) => {
		return { email };
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

type DatabaseUserAttributes = user;
