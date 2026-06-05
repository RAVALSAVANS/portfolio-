import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

import "react-toastify/dist/ReactToastify.css";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log(
        "SERVICE ID:",
        import.meta.env.VITE_EMAILJS_SERVICE_ID
      );

      console.log(
        "TEMPLATE ID:",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      );

      console.log(
        "PUBLIC KEY:",
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current
      );

      console.log("SUCCESS:", result);

      toast.success("Message sent successfully! ✅", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });

      // Reset Form
      form.current.reset();
    } catch (error) {
      console.log("STATUS:", error?.status);
      console.log("TEXT:", error?.text);
      console.log("ERROR:", error);

      toast.error(error?.text || "Failed to send message ❌", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[10vw] md:px-[7vw] lg:px-[12vw]"
    >
      {/* Toast */}
      <ToastContainer />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-white">
          CONTACT
        </h2>

        <div className="w-32 h-1 mx-auto mt-4 bg-purple-500 rounded-full"></div>

        <p className="mt-4 text-lg font-semibold text-gray-400">
          I’d love to hear from you — reach out for any
          opportunities or questions!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 border shadow-2xl bg-[#0d081f]/90 border-gray-700 rounded-2xl backdrop-blur-md"
      >
        <h3 className="text-2xl font-semibold text-center text-white">
          Get In Touch 🚀
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col mt-6 space-y-5"
        >
          {/* Hidden Date Field */}
          <input
            type="hidden"
            name="date"
            value={new Date().toLocaleString()}
          />

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Your Email
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Your Name
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              required
              className="w-full p-3 rounded-lg bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Message
            </label>

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              required
              className="w-full p-3 rounded-lg resize-none bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-[1.02] hover:opacity-90 disabled:opacity-70"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;