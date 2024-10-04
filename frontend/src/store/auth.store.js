import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";
axios.defaults.withCredentials = true;
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  isCheckeingAuth: false,
  eror: null,
  singUp: async (name, email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
      });
      console.log(response.data);
      
      set({
        user: response.data?.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
        console.log(error);
        
      set({
        isLoading: false,
        error: error?.response?.data?.message || "Error to sign up",
      });
      throw error
    }
  },
}));
