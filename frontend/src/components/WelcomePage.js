export default function WelcomePage({ user }) {
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload(); // or use history.push('/login') if using React Router's useHistory
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold">Welcome to the App!</h1>
            <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
                Logout
            </button>
        </div>
    );
}
