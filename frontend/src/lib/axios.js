import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || 
    (import.meta.env.MODE === "development" 
      ? "http://localhost:5003/api" 
      : "https://your-production-api.com/api"),
  withCredentials: true,
});
