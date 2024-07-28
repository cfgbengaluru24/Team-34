import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import trainersData from './trainer.json'; // Import trainers data

const TrainersPage = () => {
    const { campIndex } = useParams();
    const navigate = useNavigate();

    const getTrainersForCamp = (campIndex) => {
        const divisionPattern = [3, 4, 2];
        let trainers = [];
        let startIndex = 0;

        for (let i = 0; i < divisionPattern.length; i++) {
            if (i < campIndex) {
                startIndex += divisionPattern[i];
            } else if (i === campIndex) {
                trainers = trainersData.trainers.slice(startIndex, startIndex + divisionPattern[i]);
                break;
            }
        }

        return trainers;
    };

    const trainers = getTrainersForCamp(Number(campIndex));

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold" style={{ color: 'black' }}>Trainers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {trainers.map((trainer) => (
                    <div key={trainer.emailId} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold mb-2">{trainer.fullname}</h2>
                        <p><strong>Age:</strong> {trainer.age}</p>
                        <p><strong>Location:</strong> {trainer.location}</p>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate(-1)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Back
            </button>
        </div>
    );
};

export default TrainersPage;
