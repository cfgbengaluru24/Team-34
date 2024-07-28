import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const API_URL = 'http://localhost:5000/';

export default function TrainerWelcomePage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const [formData, setFormData] = useState({
    fullname: '',
    age: '',
    location: '',
    emailId: '',
    skills: [],
    mobile: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (e) => {
    setFormData({
      ...formData,
      skills: e.target.value.split(','),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(formData);
      const response = await axios.post(API_URL+"api/trainers/create", formData); // Update URL here
      console.log('Trainer created:', response.data);
    } catch (error) {
      console.error('Error creating trainer:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Welcome Trainer!!!</h1>
      <h2 className="text-2xl font-bold mb-6 text-center">Add Trainer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="fullname">
            Full Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="age">
            Age
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="emailId">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="email"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="skills">
            Skills (comma separated)
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="text"
            id="skills"
            name="skills"
            value={formData.skills.join(",")}
            onChange={handleSkillsChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="mobile">
            Mobile
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            className="w-full px-3 py-2 border rounded-lg"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
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
