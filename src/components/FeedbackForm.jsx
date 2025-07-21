'use client'
import Navbar from './navbar'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [success, setSuccess] = useState(false)
  const formRef = useRef(null);
    const isInView = useInView(formRef, { once: false });
    const controls = useAnimation();
  
    useEffect(() => {
  if (!success) {
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
}, [isInView, success, controls]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/submit-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSuccess(true)
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#d5bea2] md:bg-gradient-to-r md:from-[#ffe4c4] md:to-black pb-10 px-2 md:px-6">
          <Navbar />
          <h2 className="text-[2rem] md:text-[3rem] font-bold text-center text-black drop-shadow-md mb-5 md:mb-10">
            Leave <span className="text-[#ffe4c4]">a Message!</span>
          </h2>
      <motion.form ref={formRef} animate={controls} initial={{ opacity: 0, scale: 0.95, y: 30 }} onSubmit={handleSubmit} className="max-w-[95%] md:max-w-[45%] mx-auto bg-white/10 backdrop-blur-md p-2 md:p-8 rounded-xl shadow-lg space-y-2 md:space-y-6">
        <input name="name" placeholder="Your Name" onChange={handleChange} value={formData.name} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Your message" onChange={handleChange} value={formData.message} className="w-full p-2 border rounded" required />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send Message</button>
        {success && <p className="text-black text-center">Message submitted successfully!</p>}
      </motion.form>
    </div>
  )
}
