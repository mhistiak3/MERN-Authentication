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
  verifyEmail: async (verificationCode) => {
      set({ isLoading: true, error: null });
      console.log(verificationCode);
      
      try {
        const response = await axios.post(`${API_URL}/verify-email`, {
          code:verificationCode,
        });
        set({
          user: response.data?.user,
          isAuthenticated: true,
          isLoading: false,
        });
        return response.data
      } catch (error) {
        set({
          isLoading: false,
          error: error?.response?.data?.message || "Error to verify email",
        });
        throw error
      }
  },
  checkAuth: async () => {
    set({ isCheckeingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({user:response.data?.user, isAuthenticated: true, isCheckeingAuth: false});
    } catch (error) {
      console.log(error);
    
       set({ isCheckeingAuth: false, error: null });
    }
  }

}));
