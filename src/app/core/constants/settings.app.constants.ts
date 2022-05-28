export const SETTINGS_APP = {

  // urls + redirect
  URL_RETURN_KEY: 'returnUrl',
  URL_LOGIN: '/login',

  URL_HOME_CLIENT: '/app/dashboard/',
  URL_HOME_ADMIN: '/app/dashboard/',

  VALIDATION_EMAIL: RegExp(/^[a-zA-Z!#$%&'*\/=?^`]+[a-zA-Z0-9.!+#$%&'*\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?){2,61}$/),

  // Local Storage Keys
  STORE_DATA_KEYS: {
    AUTH: 'authUserData',
  },

  LONG_POLLING_TIMEOUT: 15 * 1000,
};
