"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Navbar from "../../components/navbar";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (!submitted) {
      if (isInView) {
        controls.start({
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        });
      } else {
        controls.start({
          opacity: 0,
          scale: 0.95,
          y: 30,
        });
      }
    }
  }, [isInView, submitted, controls]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_dlzfq0k", 
        "template_18t15uj",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          phone: form.phone,
          message: form.message,
        },
        "frli6_iJzTZIGqgGK"
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="min-h-screen w-full bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black pb-10 px-2 md:px-6">
      <Navbar />
      <h2 className="text-[2rem] md:text-[3rem] font-bold text-center text-black drop-shadow-md mb-5 md:mb-10">
        Contact <span className="text-[#ffe4c4]">Me!</span>
      </h2>

      {!submitted && (
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={controls}
          exit={{ opacity: 0, x: 100, transition: { duration: 0.5 } }}
          onSubmit={handleSubmit}
          className="max-w-[95%] md:max-w-[55%] mx-auto bg-white/10 backdrop-blur-md p-2 md:p-8 rounded-xl shadow-lg space-y-2 md:space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 hover:shadow-[0_0_12px_#ffe4c4] rounded border border-[#ffe4c4] bg-white/20 text-black placeholder:text-[#353535] focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 hover:shadow-[0_0_12px_#ffe4c4] rounded border border-[#ffe4c4] bg-white/20 text-black placeholder:text-[#353535] focus:outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
              className="w-full px-4 py-2 hover:shadow-[0_0_12px_#ffe4c4] rounded border border-[#ffe4c4] bg-white/20 text-black placeholder:text-[#353535] focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              onChange={handleChange}
              className="w-full px-4 py-2 hover:shadow-[0_0_12px_#ffe4c4] rounded border border-[#ffe4c4] bg-white/20 text-black placeholder:text-[#353535] focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 hover:shadow-[0_0_12px_#ffe4c4] rounded border border-[#ffe4c4] bg-white/20 text-black placeholder:text-[#353535] focus:outline-none"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="px-4 md:px-6 py-2 mb-2 md:mb-0 w-full md:py-3 bg-[#000] text-[#ffe4c4] font-semibold rounded transition hover:shadow-[0_0_12px_#ffe4c4]"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      )}

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#000] mt-32"
        >
          <h3 className="text-[1.8rem] md:text-[3rem] font-semibold text-[#ffe4c4] mb-2">Thank you!</h3>
          <p className="text-md text-[0.9rem] md:text-[1.5rem]">
            Your message has been sent successfully.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ContactMe;
