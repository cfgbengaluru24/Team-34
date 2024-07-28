import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    campId: '',
    trainerId: '',
    status: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + 'api/bookings/create', formData);
      console.log('Booking created:', response.data);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="campId">Camp ID</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="text"
            id="campId"
            name="campId"
            value={formData.campId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="trainerId">Trainer ID</label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="text"
            id="trainerId"
            name="trainerId"
            value={formData.trainerId}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
