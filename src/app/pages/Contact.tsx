import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Error to send email");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="pt-24 px-6 md:px-12 lg:px-20 bg-bg-100 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-wedgewood-800">Contact Me</h2>
      <p className="text-center text-wedgewood-400 mt-2">
        Got a question? Send me a message, and I{"'"}ll get back to you soon.
      </p>

      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16">
        
        {/* Redes Sociales */}
        <div className="bg-wedgewood-950 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold text-wedgewood-300 mb-4 text-center md:text-left">
            Connect With Me
          </h3>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://linkedin.com/in/amiunebelen"
                target="_blank"
                className="flex items-center gap-2 bg-gray-700 p-3 rounded-lg hover:bg-wedgewood-500 transition text-center justify-center"
              >
                <FaLinkedin className="text-white-400 text-xl" /> <span>amiunebelen</span>
              </a>
              <a
                href="https://github.com/belenamiune"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 p-3 rounded-lg hover:bg-wedgewood-500 transition text-center justify-center"
              >
                <FaGithub className="text-gray-300 text-xl" /> <span>@belenamiune</span>
              </a>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold text-wedgewood-300 mb-4 text-center md:text-left">
            Get in Touch
          </h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-wedgewood-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-wedgewood-500"
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-wedgewood-500"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-wedgewood-500 hover:bg-wedgewood-600 text-white py-2 px-4 rounded-lg font-semibold transition"
            >
              {loading ? "Sending..." : "Send"}
            </button>
            {success && <p className="text-green-500">Message sent successfully!</p>}
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-wedgewood-600 border-t border-gray-700 pt-6 pb-6">
        <p>© {new Date().getFullYear()} Maria Belen Amiune. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
