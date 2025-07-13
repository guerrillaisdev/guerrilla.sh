// Chadson v69.0.0: Jest Setup File
// Purpose: To extend Jest's expect with custom matchers from @testing-library/jest-dom.
// This file is run automatically by Jest before each test file, ensuring that
// matchers like .toBeInTheDocument() are available globally in all tests.

import '@testing-library/jest-dom';