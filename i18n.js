/**
 * @file i18n.js
 * @summary Configuration for next-intl.
 * @journal
 *   - 2025-07-12: Switched to a JavaScript configuration to avoid TypeScript issues.
 *     - Defined supported locales (en, es).
 *     - Set up request-based locale detection.
 */
const {getRequestConfig} = require('next-intl/server');
 
module.exports = getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));