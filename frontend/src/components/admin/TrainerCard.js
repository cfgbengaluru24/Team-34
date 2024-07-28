// // TrainerCard.js
// import React from 'react';

// const TrainerCard = ({ trainer, isSelected, onSelect }) => {
//     return (
//         <div
//             className={`shadow-md rounded-lg p-4 mb-4 cursor-pointer ${isSelected ? 'bg-green-300' : 'bg-white'}`}
//             onClick={onSelect}
//         >
//             <p><strong>Full Name:</strong> {trainer.fullname}</p>
//             <p><strong>Age:</strong> {trainer.age}</p>
//             <p><strong>Location:</strong> {trainer.location}</p>
//         </div>
//     );
// };

// export default TrainerCard;


import React, { useState } from 'react';

const trainers = [
    { trainerName: 'John Doe', location: 'New York', experience: '5 years', gender: 'Male' },
    { trainerName: 'Jane Smith', location: 'Los Angeles', experience: '3 years', gender: 'Female' },
    { trainerName: 'Mike Johnson', location: 'Chicago', experience: '8 years', gender: 'Male' },
    { trainerName: 'Emily Davis', location: 'Houston', experience: '2 years', gender: 'Female' },
    { trainerName: 'David Wilson', location: 'Phoenix', experience: '6 years', gender: 'Male' }
  ];
  

const TrainerCards = () => {
  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    setSelectedIndices(prevSelected =>
      prevSelected.includes(index)
        ? prevSelected.filter(i => i !== index)
        : [...prevSelected, index]
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-4 space-y-4">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`p-4 border rounded shadow-md cursor-pointer ${
              selectedIndices.includes(index) ? 'bg-green-500 text-white' : 'bg-white'
            }`}
          >
            <h2 className="text-xl font-bold">{trainer.trainerName}</h2>
            <p>Location: {trainer.location}</p>
            <p>Experience: {trainer.experience}</p>
            <p>Gender: {trainer.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerCards;