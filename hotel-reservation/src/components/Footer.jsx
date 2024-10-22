import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Left Side - Branding */}
                    <div className="w-full sm:w-auto text-center sm:text-left">
                        <h2 className="text-2xl font-bold">phoebe's</h2>
                        <p className="text-sm mt-2">© {new Date().getFullYear()} phoebe's. All rights reserved.</p>
                    </div>

                    {/* Center - Links */}
                    <div className="w-full sm:w-auto text-center sm:text-left mt-4 sm:mt-0">
                        <ul className="space-y-2 sm:space-y-0 sm:space-x-8 flex flex-col sm:flex-row">
                            <li><a href="/" className="hover:text-gray-400">Home</a></li>
                            <li><a href="/about" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="/services" className="hover:text-gray-400">Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Right Side - Social Media */}
                    <div className="w-full sm:w-auto text-center sm:text-right mt-4 sm:mt-0">
                        <ul className="flex justify-center sm:justify-end space-x-6">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <svg className="w-6 h-6 text-white hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.324v21.352C0 23.405.595 24 1.325 24H12v-9.294H9.293v-3.622H12V8.412c0-2.675 1.633-4.126 4.018-4.126 1.141 0 2.122.084 2.407.123v2.79H16.61c-1.258 0-1.5.597-1.5 1.474v1.932h3.006l-.392 3.622H15.11V24h5.64C23.405 24 24 23.405 24 22.676V1.324C24 .593 23.405 0 22.675 0z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <svg className="w-6 h-6 text-white hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.867 9.867 0 01-3.127 1.196 4.92 4.92 0 00-8.388 4.482 13.96 13.96 0 01-10.141-5.144 4.822 4.822 0 00-.664 2.475c0 1.71.87 3.213 2.188 4.096A4.904 4.904 0 01.96 9.565v.061c0 2.386 1.698 4.374 3.946 4.828a4.93 4.93 0 01-2.212.084c.624 1.947 2.44 3.365 4.588 3.403a9.874 9.874 0 01-6.1 2.104c-.396 0-.787-.023-1.174-.068a13.945 13.945 0 007.548 2.213c9.055 0 14.007-7.503 14.007-14.007 0-.213-.004-.425-.014-.637A9.935 9.935 0 0024 4.557z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <svg className="w-6 h-6 text-white hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.98.24 2.43.414a4.916 4.916 0 011.751 1.147c.485.485.87 1.074 1.147 1.751.174.451.36 1.261.414 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.98-.414 2.43a4.916 4.916 0 01-1.147 1.751c-.485.485-1.074.87-1.751 1.147-.451.174-1.261.36-2.43.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.98-.24-2.43-.414a4.916 4.916 0 01-1.751-1.147c-.485-.485-.87-1.074-1.147-1.751-.174-.451-.36-1.261-.414-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.98.414-2.43A4.916 4.916 0 013.793 3.03c.485-.485 1.074-.87 1.751-1.147.451-.174 1.261-.36 2.43-.414C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.735 0 8.332.015 7.052.07c-1.293.059-2.183.273-2.959.58a6.918 6.918 0 00-2.508 1.647A6.918 6.918 0 00.57 6.725c-.307.776-.521 1.666-.58 2.959C-.015 8.332 0 8.735 0 12s.015 3.668.07 4.948c.059 1.293.273 2.183.58 2.959a6.918 6.918 0 001.647 2.508 6.918 6.918 0 002.508 1.647c.776.307 1.666.521 2.959.58 1.28.055 1.683.07 4.948.07s3.668-.015 4.948-.07c1.293-.059 2.183-.273 2.959-.58a6.918 6.918 0 002.508-1.647 6.918 6.918 0 001.647-2.508c.307-.776.521-1.666.58-2.959.055-1.28.07-1.683.07-4.948s-.015-3.668-.07-4.948c-.059-1.293-.273-2.183-.58-2.959a6.918 6.918 0 00-1.647-2.508 6.918 6.918 0 00-2.508-1.647c-.776-.307-1.666-.521-2.959-.58C15.668.015 15.265 0 12 0z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
