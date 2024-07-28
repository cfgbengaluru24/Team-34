import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import campsData from './camp.json'; // Adjust the path if needed
import trainersData from './trainer.json'; // Import trainers data
import TrainerCard from './TrainerCard'; // Import TrainerCard component

export default function AdminWelcomePage() {
    const [camps, setCamps] = useState([]);
    const [selectedCamp, setSelectedCamp] = useState(null);
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);
    const [isFindBookingFormVisible, setIsFindBookingFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        location: '',
        startTime: '',
        endTime: ''
    });
    const [bookingId, setBookingId] = useState('');
    const [bookingInfo, setBookingInfo] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        try {
            console.log('Loading camps data...');
            if (campsData && campsData.camps) {
                setCamps(campsData.camps);
                console.log('Camps data loaded:', campsData.camps);
            } else {
                setError('Camps data is not in the expected format');
                console.log('Error: Camps data is not in the expected format');
            }
        } catch (err) {
            setError('Failed to load camps data');
            console.log('Error: Failed to load camps data', err);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleCreateCampClick = () => {
        setIsCreateFormVisible(!isCreateFormVisible);
        setIsFindBookingFormVisible(false);
        console.log('Create Camp button clicked');
    };

    const handleFindBookingClick = () => {
        setIsFindBookingFormVisible(!isFindBookingFormVisible);
        setIsCreateFormVisible(false);
        console.log('Find Booking button clicked');
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
        console.log('Logout button clicked');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Logic to create a new camp
        console.log('Form data submitted:', formData);
    };

    const handleBookingIdChange = (e) => {
        setBookingId(e.target.value);
    };

    const handleFindBookingSubmit = (e) => {
        e.preventDefault();
        // Logic to find booking by booking ID
        const foundBooking = trainersData.find(trainer => trainer.bookingId === bookingId);
        if (foundBooking) {
            setBookingInfo(foundBooking);
        } else {
            setBookingInfo(null);
        }
        console.log('Booking ID submitted:', bookingId);
    };

    const handleCardClick = (index) => {
        setSelectedCamp(index);
    };

    const handleTrainerClick = (trainer) => {
        setSelectedTrainer(trainer);
    };

    const getTrainersForCamp = (campIndex) => {
        const trainerGroups = [
            trainersData.slice(0, 3),
            trainersData.slice(3, 7),
            trainersData.slice(7, 9)
        ];
        return trainerGroups[campIndex % trainerGroups.length];
    };

    return (
        <>
          <button onClick={handleLogout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Logout
            </button>
            <button onClick={handleLogout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Logout
            </button>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold text-black">Welcome Admin</h1>
            <div className="mb-4">
                <button
                    onClick={handleCreateCampClick}
                    className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {isCreateFormVisible ? 'Cancel' : 'Create Camp'}
                </button>
                <button
                    onClick={handleFindBookingClick}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    {isFindBookingFormVisible ? 'Cancel' : 'Find Booking'}
                </button>
            </div>
            <button onClick={handleLogout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Logout
            </button>
            {loading ? (
                <p>Loading camps...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : selectedCamp === null ? (
                <>
                    <div className="mb-4">
                        <button
                            onClick={handleCreateCampClick}
                            className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            {isCreateFormVisible ? 'Cancel' : 'Create Camp'}
                        </button>
                        <button
                            onClick={handleFindBookingClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            {isFindBookingFormVisible ? 'Cancel' : 'Find Booking'}
                        </button>
                    </div>
                    {isCreateFormVisible && (
                        <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                                    Camp Location
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startTime">
                                    Start Time
                                </label>
                                <input
                                    type="text"
                                    id="startTime"
                                    name="startTime"
                                    value={formData.startTime}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endTime">
                                    End Time
                                </label>
                                <input
                                    type="text"
                                    id="endTime"
                                    name="endTime"
                                    value={formData.endTime}
                                    onChange={handleInputChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Create Camp
                            </button>
                        </form>
                    )}
                    {isFindBookingFormVisible && (
                        <form onSubmit={handleFindBookingSubmit} className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bookingId">
                                    Booking ID
                                </label>
                                <input
                                    type="text"
                                    id="bookingId"
                                    name="bookingId"
                                    value={bookingId}
                                    onChange={handleBookingIdChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                                Find Booking
                            </button>
                            {bookingInfo && (
                                <div className="mt-4 p-4 bg-gray-200 rounded">
                                    <p><strong>Trainer Name:</strong> {bookingInfo.trainerName}</p>
                                    <p><strong>Camp Location:</strong> {bookingInfo.campLocation}</p>
                                </div>
                            )}
                        </form>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {camps.length > 0 ? (
                            camps.map((camp, index) => (
                                <div
                                    key={camp._id}
                                    className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
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
                </>
            ) : (
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">{camps[selectedCamp].location}</h2>
                    <p><strong>Start Time:</strong> {camps[selectedCamp].startTime}</p>
                    <p><strong>End Time:</strong> {camps[selectedCamp].endTime}</p>
                    <div className="mt-4">
                        <h3 className="text-md font-semibold mb-2">Trainers:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {getTrainersForCamp(selectedCamp).map((trainer) => (
                                <TrainerCard
                                    key={trainer.emailId}
                                    trainer={trainer}
                                    isSelected={selectedTrainer === trainer}
                                    onSelect={() => handleTrainerClick(trainer)}
                                />
                            ))}
                        </div>
                    </div>
                    <button onClick={() => setSelectedCamp(null)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                        Back
                    </button>
                </div>
            )}
            <button onClick={handleLogout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Logout
            </button>
           
        </div>
      
            
        </>
    );
}
