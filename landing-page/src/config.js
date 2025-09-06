const config = {
  API_BASE_URL: import.meta.env.VITE_API_URL || '/api',
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL || 'http://caterxperience.test',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',
  
  // Laravel API Endpoints
  ENDPOINTS: {
    LOGIN: '/login',
    LOGOUT: '/logout',
    PASSWORD_RESET: '/password/reset',
    PASSWORD_EMAIL: '/password/email',
    USER: '/user',
  }
};

export default config;
