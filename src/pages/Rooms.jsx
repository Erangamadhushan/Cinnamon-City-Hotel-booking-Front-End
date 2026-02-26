import React, { useEffect, useState } from "react";
import { api } from "../lib/api";
import { Link } from "react-router-dom";

import RoomContent from "../components/pages/room/RoomContent";
const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api
      .listRooms()
      .then((data) => {
        if (!mounted) return;
        setRooms(Array.isArray(data?.data) ? data.data : data);
      })
      .catch((err) => setError(err.message || "Failed to load rooms"))
      .finally(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <div className="text-gray-600">Loading rooms…</div>;
  }

  if (error) {
    return (
      <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
        {error}
      </div>
    );
  }

  if (!rooms.length) {
    return <div className="text-gray-600">No rooms available.</div>;
  }

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-gray-900">Rooms</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomContent key={room._id || room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
