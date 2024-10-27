import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Adjust import if needed

function HotelSignUpConfirm() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-semibold text-teal-600 mb-4">Hotel Registration Received</h1>
                <p className="text-gray-700 mb-4">
                    Thank you for registering your hotel with us! We have received your details, and our team is currently reviewing your information to ensure it meets our standards.
                </p>
                <p className="text-gray-700 mb-4">
                    Once your account is verified, you’ll receive an email confirmation. After that, you’ll be able to log into your account and start managing your listings, bookings, and more.
                </p>
                <p className="text-gray-700">
                    If you have any questions in the meantime, feel free to reach out to our support team. We look forward to partnering with you!
                </p>
                <Button
                    className="mt-6 bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </Button>
            </div>
        </div>
    );
}

export default HotelSignUpConfirm;
