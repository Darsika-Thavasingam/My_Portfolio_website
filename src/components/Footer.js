import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-primary text-white border-t border-gray-800 pt-12 pb-8">
            <div className="max-w-6xl mx-auto px-5 flex flex-col items-center text-center">

                {/* Brand / Logo */}
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 tracking-wide mb-4">
                    My Portfolio
                </h2>

                {/* Brief Description */}
                <p className="text-gray-400 max-w-md mb-8">
                    Crafting beautiful, responsive, and robust full stack web applications. Let's build something amazing together!
                </p>

                {/* Social Icons Container */}
                <div className="flex gap-6 mb-8">
                    <a href="https://github.com/Darsika-Thavasingam" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-sky-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                        <FaGithub className="text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/darsika-thavasingam/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-sky-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                        <FaLinkedin className="text-2xl" />
                    </a>
                    <a href="mailto:darsikathavasingam@gmail.com" className="p-3 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-sky-500 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                        <FaEnvelope className="text-2xl" />
                    </a>
                </div>

                {/* Divider Line */}
                <div className="w-full max-w-2xl h-px bg-gray-800 mb-6"></div>

                {/* Copyright info */}
                <p className="text-sm text-gray-500 font-medium">
                    © {new Date().getFullYear()} Darsika Thavasingam. All rights reserved.
                </p>
                <p className="text-xs text-gray-600 mt-2 tracking-wider">
                    BUILT WITH <span className="text-sky-500 font-semibold">REACT</span> & <span className="text-sky-500 font-semibold">TAILWIND</span>
                </p>

            </div>
        </footer>
    );
}