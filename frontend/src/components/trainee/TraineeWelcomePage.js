import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import Quiz4 from './Quiz4';
import JobPage from './JobPage';
import Cadet from '../trainee/assets/cadet.png'
import Imageinframe from '../trainer/ImageFrame';
import { Bubble } from "@typebot.io/react";
import TestimonialCarousel from './TestimonialCarousel';


export default function TraineeWelcomePage() {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    const handleQuizChange = (event) => {
        setSelectedQuiz(event.target.value);
    };

    const renderQuiz = () => {
        switch (selectedQuiz) {
            case '1':
                return <Quiz1 />;
            case '2':
                return <Quiz2 />;
            case '3':
                return <Quiz3 />;
            case '4':
                return <Quiz4 />;
            default:
                return <Imageinframe/>;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <nav className="bg-blue-500 w-full py-4 fixed top-0 z-10">
            <div className="container flex flex-row  justify-between pl-10 pr-10 mx-auto">
            <img src={Cadet}></img>
                    <button onClick={handleLogout} className="text-white hover:underline">Logout</button>
                </div>
            </nav>
            <div className="mt-20 flex flex-col items-center">
                <h1 className="text-xl font-semibold" style={{ color: 'black' }}>Welcome Trainee!</h1>
                <p className="mt-4" style={{ color: 'black' }}>Please select a quiz to start:</p>
                <select onChange={handleQuizChange} className="mt-4 p-2 border rounded" style={{ color: 'black' }}>
                    <option value="" style={{ color: 'black' }}>Select a quiz</option>
                    <option value="1" style={{ color: 'black' }}>Ethical</option>
                    <option value="2" style={{ color: 'black' }}>Critical Thinking</option>
                    <option value="3" style={{ color: 'black' }}>Communication</option>
                    <option value="4" style={{ color: 'black' }}>Gender Sensitiivy</option>
                </select>
            </div>
            <div className="mt-10 flex flex-col items-center">
                {renderQuiz()}
            </div>
            <JobPage />
            <br />
            <br />
            <h1 className="text-4xl font-semibold">Testimonials</h1>
            <TestimonialCarousel />
            <Bubble
            typebot="my-typebot-efsvgq1"
            theme={{ button: { backgroundColor: "#0042DA" } }}
            />

        </div>
    );
}
