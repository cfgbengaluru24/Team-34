import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import AdminWelcomePage from './components/admin/AdminWelcomePage';
import TrainerWelcomePage from './components/trainer/TrainerWelcomePage';
import TraineeWelcomePage from './components/trainee/TraineeWelcomePage';
import TrainerOptions from './components/trainer/TrainerOptions' ;
import CreateCamp from '../src/components/admin/CreateMaps';
import TicketApproval from '../src/components/admin/TicketApproval';

function App() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
        }
        setIsLoading(false); // Set loading to false after checking localStorage
    }, []);

    useEffect(() => {
        if (user) {
            console.log('User state updated:', user);  // Debugging: log the user data
        }
    }, [user]);

    if (isLoading) {
        return <div>Loading...</div>; // Show a loading message while checking localStorage
    }

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={user ? <Navigate replace to={`/${user.role}`} /> : <AuthForm/>} />
                    <Route path="/admin" element={user && user.role === 'admin' ? <AdminWelcomePage  /> : <AdminWelcomePage user={user} />} />
                    <Route path="/trainer" element={user && user.role === 'trainer' ? <TrainerOptions/> :  <TrainerOptions user={user} />} />
                    <Route path="/welcome" element={user && user.role === 'trainee' ? <TraineeWelcomePage /> : <TraineeWelcomePage user={user} /> } />
                    <Route path="/" element={<Navigate replace to="/login" />} />
                    <Route path="/create-camp" element={<CreateCamp />} />
                    <Route path="/ticket-approval" element={<TicketApproval />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
