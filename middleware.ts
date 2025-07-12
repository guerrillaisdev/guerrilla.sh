/**
 * @file middleware.ts
 * @summary Middleware for handling internationalization.
 * @journal
 *   - 2025-07-12: Created the i18n middleware.
 *     - Configured default and supported locales.
 *     - Set up locale detection and routing.
 */
import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};