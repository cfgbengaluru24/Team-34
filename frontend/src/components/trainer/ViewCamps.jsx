import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000/';

export default function CampCard() {
  const [camps, setCamps] = useState([]);
  const [trainerId, setTrainerId] = useState(''); // Assuming you have the trainer ID

  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const response = await fetch(API_URL + 'api/camps/retrieve-all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCamps(data);
      } catch (error) {
        console.error('Error fetching camps:', error);
      }
    };

    fetchCamps();
  }, []);


  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Camp Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {camps.map((camp) => (
          <div key={camp._id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{camp.location}</h3>
            <p className="text-gray-700 mb-1"><strong>Start Time:</strong> {camp.startTime}</p>
            <p className="text-gray-700 mb-1"><strong>End Time:</strong> {camp.endTime}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
