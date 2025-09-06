// Axios client configured for Laravel backend
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const request = async (method, url, body, headers = {}) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      ...headers
    }
  };

  // Add authorization header if token exists
  const token = localStorage.getItem('token');
  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  if (body) options.body = JSON.stringify(body);

  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
  const res = await fetch(fullUrl, options);

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = {};
  }

  if (!res.ok) {
    throw new Error(data.message || `HTTP error! status: ${res.status}`);
  }

  return { data, status: res.status };
};

const axiosClient = {
  get: (url, headers) => request('GET', url, null, headers),
  post: (url, body, headers) => request('POST', url, body, headers),
  put: (url, body, headers) => request('PUT', url, body, headers),
  patch: (url, body, headers) => request('PATCH', url, body, headers),
  delete: (url, headers) => request('DELETE', url, null, headers),
};

export default axiosClient;


