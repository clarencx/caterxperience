// Minimal axios-like client to keep Menu running. Replace with your real client when ready.
const request = async (method, url, body) => {
  const options = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) options.body = JSON.stringify(body);
  const res = await fetch(url, options);
  let data = null;
  try { data = await res.json(); } catch { data = {}; }
  return { data };
};

const axiosClient = {
  get: (url) => request('GET', url),
  post: (url, body) => request('POST', url, body),
  put: (url, body) => request('PUT', url, body),
  delete: (url) => request('DELETE', url),
};

export default axiosClient;


