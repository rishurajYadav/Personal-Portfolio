import { useState } from "react";
import axios from "axios";

const ContactSection = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/contact",
        form,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Message sent successfully");

      setForm({
        email: "",
        name: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("CONTACT ERROR:", err.response || err);
      alert("Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#0b0b1e] via-[#0f0f2d] to-[#050510]
      text-white px-6"
    >
      <div className="w-full max-w-xl">
        {/* HEADER */}
        <h1 className="text-5xl font-extrabold text-center mb-4 tracking-wide">
          CONTACT
        </h1>

        <div className="w-20 h-1 bg-purple-500 mx-auto mb-6 rounded-full"></div>

        <p className="text-center text-gray-400 mb-14 text-lg">
          I'd love to hear from you — reach out for any opportunities or questions!
        </p>

        {/* FORM CARD */}
        <div
          className="bg-white/5 backdrop-blur-xl border border-white/10
          rounded-2xl shadow-2xl p-8 md:p-10"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">
            Connect With Me 🚀
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5
              border border-white/20 focus:outline-none focus:ring-2
              focus:ring-purple-500 placeholder-gray-400 transition"
            />

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5
              border border-white/20 focus:outline-none focus:ring-2
              focus:ring-purple-500 placeholder-gray-400 transition"
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5
              border border-white/20 focus:outline-none focus:ring-2
              focus:ring-purple-500 placeholder-gray-400 transition"
            />

            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5
              border border-white/20 focus:outline-none focus:ring-2
              focus:ring-purple-500 placeholder-gray-400 transition resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-lg font-semibold
              bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500
              hover:from-purple-600 hover:via-pink-600 hover:to-fuchsia-600
              transition transform hover:scale-[1.02] shadow-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
