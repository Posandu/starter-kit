import { redirect } from '@sveltejs/kit';
import { generateState, generateCodeVerifier } from 'arctic';
import { google } from '$lib/server/auth';

import type { RequestEvent } from '@sveltejs/kit';
import { dev } from '$app/environment';

export async function GET(event: RequestEvent): Promise<Response> {
	const state = generateState();
	const codeVerifier = generateCodeVerifier();
	const url = await google.createAuthorizationURL(state, codeVerifier, {
		scopes: ['profile', 'email']
	});

	event.cookies.set('github_oauth_state', state, {
		path: '/',
		secure: import.meta.env.PROD,
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax'
	});

	event.cookies.set('code_verifier', codeVerifier, {
		secure: dev,
		path: '/',
		httpOnly: true,
		maxAge: 60 * 10
	});

	redirect(302, url.toString());
}
