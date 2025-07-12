/**
 * @file src/app/api/auth/[...nextauth]/route.ts
 * @summary Next-auth API route.
 * @journal
 *   - 2025-07-12: Created the next-auth API route.
 *     - Configured the Prisma adapter.
 *     - Added the Email provider for 2FA.
 */
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '@/lib/prisma';
import EmailProvider from 'next-auth/providers/email';

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
});

export { handler as GET, handler as POST };