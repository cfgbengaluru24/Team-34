
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import campsData from './camp.json'; // Adjust the path if needed
import trainersData from './trainer.json'; // Import trainers data
import TrainerCard from './TrainerCard'; // Import TrainerCard component

export default function AdminWelcomePage() {
    const [camps, setCamps] = useState([]);
    const [selectedCamp, setSelectedCamp] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            if (campsData && campsData.camps) {
                setCamps(campsData.camps);
            } else {
                setError('Camps data is not in the expected format');
            }
        } catch (err) {
            setError('Failed to load camps data');
        } finally {
            setLoading(false);
        }
    }, []);

    const handleCardClick = (campIndex) => {
        setSelectedCamp(campIndex);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const handleCreateCampClick = () => {
        navigate('/create-camp');
    };

    const handleTicketApprovalClick = () => {
        navigate('/ticket-approval');
    };

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

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold" style={{ color: 'blue' }}>Welcome Admin</h1>
            {loading ? (
                <p>Loading camps...</p>
            ) : error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : selectedCamp === null ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                    {camps.length > 0 ? (
                        camps.map((camp, index) => (
                            <div
                                key={camp._id}
                                className="bg-white shadow-md rounded-lg p-4 cursor-pointer p-10"
                                onClick={() => handleCardClick(index)}
                            >
                                <h2 className="text-lg font-semibold mb-2">{camp.location}</h2>
                                <p><strong>Start Time:</strong> {camp.startTime}</p>
                                <p><strong>End Time:</strong> {camp.endTime}</p>
                            </div>
                        ))
                    ) : (
                        <p>No camps available</p>
                    )}
                </div>
            ) : (
                <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
                    <h2 className="text-lg font-semibold mb-2">{camps[selectedCamp].location}</h2>
                    <p><strong>Start Time:</strong> {camps[selectedCamp].startTime}</p>
                    <p><strong>End Time:</strong> {camps[selectedCamp].endTime}</p>
                    <div className="mt-4">
                        <h3 className="text-md font-semibold mb-2">Trainers:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {getTrainersForCamp(selectedCamp).map((trainer) => (
                                <TrainerCard key={trainer.emailId} trainer={trainer} />
                            ))}
                        </div>
                    </div>
                    <button onClick={() => setSelectedCamp(null)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                        Back
                    </button>
                </div>
            )}
            <button onClick={handleCreateCampClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl">
                Create Camp
            </button>
            <button onClick={handleTicketApprovalClick} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl">
               Ticket Approval
            </button>
            <button onClick={handleLogout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl">
                Logout
            </button>
        </div>
    );
}
