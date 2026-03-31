import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            "service_zwfao68",
            "template_utvnvho",
            form,
            "TbM7-FifHAO3-GS8c"
        )
            .then(() => {
                toast.success("Message sent successfully!");
                setForm({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                const errorMsg = error.text || error.message || JSON.stringify(error);
                console.error("EmailJS error:", error);
                toast.error("Failed to send message: " + errorMsg);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-24 px-5 bg-secondary text-white overflow-hidden">
            <Toaster 
                position="top-right"
                toastOptions={{
                    style: {
                        background: '#1f2937',
                        color: '#fff',
                        border: '1px solid #374151',
                    },
                    success: {
                        iconTheme: {
                            primary: '#38bdf8',
                            secondary: '#1f2937',
                        },
                    },
                }}
            />
            
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 inline-block tracking-wide">
                    Contact Me
                </h2>
                <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 mb-8 rounded-full"></div>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    Feel free to reach out for collaborations, unmissable opportunities, or just a friendly chat 👋
                </p>
            </motion.div>

            <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row gap-12">

                {/* Contact Info (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:w-[45%] flex flex-col justify-center text-center md:text-left"
                >
                    <h3 className="text-3xl font-bold mb-6 text-white tracking-wide">Let's <span className="text-sky-400">Connect</span></h3>
                    <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                        Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-6 mb-10 items-center md:items-start">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="p-4 bg-gray-800 rounded-full group-hover:bg-sky-500 transition-colors duration-300 shadow-md">
                                <FaEnvelope className="text-sky-400 group-hover:text-gray-900 text-xl" />
                            </div>
                            <a href="mailto:darsikathavasingam@gmail.com" className="text-gray-300 hover:text-white transition-colors text-lg font-medium tracking-wide">
                                darsikathavasingam@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start gap-6">
                        <a href="https://github.com/Darsika-Thavasingam" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full hover:bg-sky-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(56,189,248,0.4)] transition-all duration-300 group shadow-md text-gray-300">
                            <FaGithub className="group-hover:text-gray-900 text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/darsika-thavasingam/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 rounded-full hover:bg-sky-500 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(56,189,248,0.4)] transition-all duration-300 group shadow-md text-gray-300">
                            <FaLinkedin className="group-hover:text-gray-900 text-2xl" />
                        </a>
                    </div>
                </motion.div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px bg-gray-800"></div>

                {/* Contact Form (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:w-[55%]"
                >
                    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full px-5 py-4 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors placeholder-gray-500 shadow-inner"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className="w-full px-5 py-4 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors placeholder-gray-500 shadow-inner"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Your Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Hello! I'd like to discuss..."
                                className="w-full px-5 py-4 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors placeholder-gray-500 resize-none shadow-inner"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full mt-2 bg-sky-500 hover:bg-sky-400 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all duration-300 text-lg uppercase tracking-wide ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] hover:-translate-y-1'}`}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}