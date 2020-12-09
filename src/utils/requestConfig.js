export const reqConfig = (isFormData = false) => {
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
    },
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
