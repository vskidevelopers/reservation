import { useNavigate } from "react-router-dom";

export default function NotFoundPage({ title }) {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Go to the previous page
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-purple-900 to-black">
            <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-pulse">
                    {title || "Oops! Page Not Found"}
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-6">
                    The page you're looking for doesn't exist or is currently pending.
                </p>
                <button
                    onClick={goBack}
                    className="px-6 py-3 bg-gray-800 text-gray-200 font-bold text-lg rounded-lg hover:bg-purple-700 hover:text-white transition-colors duration-300 ease-in-out"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
