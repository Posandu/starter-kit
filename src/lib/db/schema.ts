import { relations } from 'drizzle-orm';
import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: text('id').primaryKey().notNull(),
	email: text('email').notNull(),
});

export type user = typeof user.$inferSelect;

export const session = sqliteTable('session', {
	id: text('id').primaryKey().notNull(),
	expires_at: integer('expires_at').notNull(),
	user_id: text('user_id')
		.notNull()
		.references(() => user.id)
});

export const userRelations = relations(user, ({ many }) => ({
	sessions: many(session)
}));

export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, {
		fields: [session.user_id],
		references: [user.id]
	})
}));
