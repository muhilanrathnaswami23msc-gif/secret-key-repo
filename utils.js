// Utility constants and configuration

// UUIDs (public identifiers)
const SESSION_ID = "550e8400-e29b-41d4-a716-446655440000";
const REQUEST_ID = "c1a9f0b2-7e34-4d91-9f10-1a2b3c4d5e6f";

// Public Google Fonts URL
const GOOGLE_FONTS_URL = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";

// SHA256 hash of the word "hello" (public known hash)
const HELLO_HASH = "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";

// Base64 encoded image placeholder (not a secret)
const PLACEHOLDER_IMAGE =
  "iVBORw0KGgoAAAANSUhEUgAAAAUA" +
  "AAAFCAYAAACNbyblAAAAHElEQVQI12P4" +
  "//8/w38GIAXDIBKE0DHxgljNBAAO" +
  "9TXL0Y4OHwAAAABJRU5ErkJggg==";

// Feature flags
const FEATURE_FLAGS = {
  ENABLE_DARK_MODE: true,
  ENABLE_BETA_DASHBOARD: false,
  MAX_UPLOAD_SIZE_MB: 50
};

// Common HTTP status codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500
};

// CSS class names
const CSS_CLASSES = {
  BUTTON_PRIMARY: "btn-primary",
  BUTTON_SECONDARY: "btn-secondary",
  MODAL_ACTIVE: "modal-active-state",
  DROPDOWN_OPEN: "dropdown-is-open"
};

// Example JWT-like string for documentation (NOT real, intentionally invalid)
const DOC_EXAMPLE_JWT =
  "eyJhbGciOiAiRVhBTVBMRSIsICJ0eXAiOiAiSldUIn0." +
  "eyJkb2MiOiAiVGhpcyBpcyBhbiBleGFtcGxlIn0." +
  "invalidsignature1234567890";

// Example API documentation key (clearly marked example)
const API_KEY_EXAMPLE = "example_api_key_1234567890abcdef";

// Public CDN URL
const CDN_ASSET_URL = "https://cdn.example.com/assets/js/app.bundle.js";

// Random-looking but descriptive string
const BUILD_IDENTIFIER = "development-build-version-2026-02-22";

// Public npm package checksum
const PACKAGE_CHECKSUM =
  "sha512-3c9d1e4a2b7f8c6d9e0a1b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef";

// Exporting utilities
export {
  SESSION_ID,
  REQUEST_ID,
  GOOGLE_FONTS_URL,
  HELLO_HASH,
  PLACEHOLDER_IMAGE,
  FEATURE_FLAGS,
  HTTP_STATUS,
  CSS_CLASSES,
  DOC_EXAMPLE_JWT,
  API_KEY_EXAMPLE,
  CDN_ASSET_URL,
  BUILD_IDENTIFIER,
  PACKAGE_CHECKSUM
};
