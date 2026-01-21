import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://srijan-2026.onrender.com/api/v1',
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await axios.get(
          'https://srijan-2026.onrender.com/api/v1/user/refresh-token',
          { withCredentials: true }
        );

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;