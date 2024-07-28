import React, { useState } from 'react';

const bookingData = [
    {
        "bookingId": "B001",
        "campLocation": "Mumbai, India",
        "startTime": "15th August 2024, 08:30",
        "endTime": "16th August 2024, 16:30",
        "trainerName": "John Doe"
    },
    {
        "bookingId": "B002",
        "campLocation": "Chennai, India",
        "startTime": "15th August 2024, 08:30",
        "endTime": "16th August 2024, 16:30",
        "trainerName": "Jane Smith"
    },
    {
        "bookingId": "B003",
        "campLocation": "Dehradun, Uttarakhand",
        "startTime": "7th October 2024, 08:30",
        "endTime": "8th October 2024, 16:30",
        "trainerName": "Emily Johnson"
    },
    {
        "bookingId": "B004",
        "campLocation": "Kottayam, Kerala",
        "startTime": "7th October 2024, 08:30",
        "endTime": "8th October 2024, 16:30",
        "trainerName": "Michael Brown"
    },
    {
        "bookingId": "B005",
        "campLocation": "Bangalore, Karnataka",
        "startTime": "14th October 2024, 08:30",
        "endTime": "15th October 2024, 16:30",
        "trainerName": "Sarah Williams"
    }
];

export default function TicketApproval() {
    const [formData, setFormData] = useState({
        ticketId: ''
    });
    const [bookingDetails, setBookingDetails] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const booking = bookingData.find(b => b.bookingId === formData.ticketId);
        setBookingDetails(booking || { error: 'Booking ID not found' });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold text-black mb-4">Ticket Approval</h1>
            <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded-lg p-4 w-full max-w-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ticketId">
                        Ticket ID
                    </label>
                    <input
                        type="text"
                        id="ticketId"
                        name="ticketId"
                        value={formData.ticketId}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Approve Ticket
                </button>
            </form>
            {bookingDetails && (
                <div className="bg-white shadow-md rounded-lg p-4 mt-4 w-full max-w-lg">
                    {bookingDetails.error ? (
                        <p className="text-red-500">{bookingDetails.error}</p>
                    ) : (
                        <>
                            <h2 className="text-lg font-bold mb-2">Booking Details</h2>
                            <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
                            <p><strong>Camp Location:</strong> {bookingDetails.campLocation}</p>
                            <p><strong>Start Time:</strong> {bookingDetails.startTime}</p>
                            <p><strong>End Time:</strong> {bookingDetails.endTime}</p>
                            <p><strong>Trainer Name:</strong> {bookingDetails.trainerName}</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
