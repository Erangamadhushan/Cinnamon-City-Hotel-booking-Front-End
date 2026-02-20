//import axios from "axios";
const BASE_URL = import.meta.env.VITE_DEV
  ? "http://localhost:4000/api"
  : "https://cinnamon-city-hotel-booking.onrender.com/api";
const ORIGIN = BASE_URL.replace(/\/?api$/, "");

async function httpRequest(path, { method = "GET", body = null } = {}) {
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
  login: (email, password) =>
    httpRequest("/auth/login", { method: "POST", body: { email, password } }),
  register: (name, email, password) =>
    httpRequest("/auth/register", {
      method: "POST",
      body: { name, email, password },
    }),
  registerAdmin: (name, email, password, adminCode) =>
    httpRequest("/auth/register-admin", {
      method: "POST",
      body: { name, email, password, adminCode },
    }),
  me: () => httpRequest("/auth/me"),
  logout: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("ch_token");
    }
  },

  // Hotels
  listHotels: (params) => {
    const qs = new URLSearchParams(params || {}).toString();
    return httpRequest(`/hotels${qs ? `?${qs}` : ""}`);
  },
  getHotel: (id) => httpRequest(`/hotels/${id}`),
  rateHotel: (id, value, bookingId) =>
    httpRequest(`/hotels/${id}/rating`, {
      method: "POST",
      body: { value, bookingId },
    }),
  createHotel: (body) => httpRequest("/hotels", { method: "POST", body }),
  updateHotel: (id, body) =>
    httpRequest(`/hotels/${id}`, { method: "PATCH", body }),
  deleteHotel: (id) => httpRequest(`/hotels/${id}`, { method: "DELETE" }),
  removeHotelImage: (id, imagePath) =>
    httpRequest(`/hotels/${id}/images`, {
      method: "DELETE",
      body: { path: imagePath },
    }),

  // Rooms
  listRooms: (params) => {
    const qs = new URLSearchParams(params || {}).toString();
    return httpRequest(`/rooms${qs ? `?${qs}` : ""}`);
  },
  getRoom: (id) => httpRequest(`/rooms/${id}`),
  createRoom: (body) => httpRequest("/rooms", { method: "POST", body }),
  updateRoom: (id, body) =>
    httpRequest(`/rooms/${id}`, { method: "PATCH", body }),
  deleteRoom: (id) => httpRequest(`/rooms/${id}`, { method: "DELETE" }),

  // Bookings
  createBooking: (body) => httpRequest("/bookings", { method: "POST", body }),
  myBookings: () => httpRequest("/bookings/me"),
  cancelBooking: (id) =>
    httpRequest(`/bookings/${id}/cancel`, { method: "POST" }),
};

export function fileUrl(path) {
  if (!path) return "";
  if (/^https?:\/\//i.test(path)) return path;
  return `${ORIGIN}${path.startsWith("/") ? path : "/" + path}`;
}
