import React from 'react'

interface MobileMenuProps {
  isOpen: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } flex flex-col space-y-4 mt-4 text-lg text-center transform transition-transform duration-300 ease-in-out md:hidden`}
    >
      <a href="#about" className="block hover:text-pink-500 transition-colors">
        About
      </a>
      <a href="#services" className="block hover:text-pink-500 transition-colors">
        Services
      </a>
      <a href="#products" className="block hover:text-pink-500 transition-colors">
        Products
      </a>
      <a href="#testimonials" className="block hover:text-pink-500 transition-colors">
        Testimonials
      </a>
      <a href="#appointment" className="block hover:text-pink-500 transition-colors">
        Book Appointment
      </a>
    </div>
  )
}

export default MobileMenu
