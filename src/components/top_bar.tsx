import { FaFacebook, FaWhatsapp, FaPhone, FaLinkedin, FaCommentDots } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

const Top_Bar = () => {
  return (
    <div className='w-full bg-black text-white fixed top-0 z-50'>
  <div className="flex justify-between items-center h-[4vh] md:h-[5vh] max-w-[92%] m-auto text-[0.79rem] md:text-sm">
    <div className="flex items-center space-x-2 md:space-x-8">
      <span className="flex items-center space-x-1">
        <FaPhone className="text-white" />
        <a href="tel:+923223955488" className="hidden md:block hover:underline">+92-322-3955488</a>
      </span>
      <span className="flex items-center space-x-1">
        <MdEmail className="text-white" />
        <a href="mailto:rimshaarshad374@gmail.com" className="hidden md:block hover:underline">rimshaarshad374@gmail.com</a>
      </span>
      <span className="hidden md:inline">Mon - Fri | 9:00am - 6:00pm</span>
    </div>

    <div className="flex items-center space-x-2 md:space-x-6 md:text-[1.2rem]">
      <Link href="https://facebook.com" target="_blank">
        <FaFacebook className="hover:text-blue-600 transition" />
      </Link>
      <Link href="https://wa.me/yourNumber" target="_blank">
        <FaWhatsapp className="hover:text-green-500 transition" />
      </Link>
      <Link href="https://linkedin.com/in/yourprofile" target="_blank">
        <FaLinkedin className="hover:text-blue-800 transition" />
      </Link>
      <Link href="#chat">
        <FaCommentDots className="hover:text-gray-400 transition" />
      </Link>
    </div>
  </div>
</div>

  )
}

export default Top_Bar