import React from 'react';

const JobCard = ({ position, picture, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
    >
      <img 
        src={picture} 
        alt={position} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{position}</h3>
      </div>
    </a>
  );
};

export default JobCard;