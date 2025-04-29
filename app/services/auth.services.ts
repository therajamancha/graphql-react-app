import type { LoginInput, SignupInput } from "~/types/auth";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const authService = {
  async login(data: LoginInput) {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }
    const { access_token } = await response.json();
    localStorage.setItem("access_token", access_token);
    return { access_token };
  },

  async signup(data: SignupInput) {
    const response = await fetch(`${API_URL}/users/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Signup failed");
    }
    const { access_token } = await response.json();
    localStorage.setItem("access_token", access_token);
    return { access_token };
  },

  async logout() {
    localStorage.removeItem("access_token");
  },

  async getCurrentUser() {
    const token = localStorage.getItem("access_token");
    if (!token) return null;
    const response = await fetch(`${API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) return null;
    return response.json();
  },
};
