//import axios from "axios";
const BASE_URL = import.meta.env.VITE_DEV ? "http://localhost:4000/api" : "https://cinnamon-city-hotel-booking.onrender.com/api";

async function httpRequest(path, { method = "GET", body = null} = {}) {
    const headers = {};
    const token = 
        typeof window !== "undefined" ? localStorage.getItem("ch_token") : null;
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    const url = `${BASE_URL}${path}`;
    const isFormData = body instanceof FormData;
    if (body && !isFormData) {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(body);
    }

    const response = await fetch(url, {
        method,
        headers,
        body,
    });

    const data = await response.json().catch(() => {
        throw new Error("Invalid JSON response");
    });

    if (!response.ok) {
        const errorMessage = data.error || "An error occurred";
        throw new Error(errorMessage);
    }

    return data;
    
}

export const api = {
    healthCheck: () => httpRequest("/health"),
    login: (email, password) => httpRequest("/auth/login", { method: "POST", body: { email, password } }),
    register: (name, email, password) => httpRequest("/auth/register", { method: "POST", body: { name, email, password } }),
    registerAdmin: (name, email, password, adminCode) => httpRequest("/auth/register-admin", { method: "POST", body: { name, email, password, adminCode } }),
    me: () => httpRequest("/auth/me"),
    logout: () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("ch_token");
        }
    },
};

