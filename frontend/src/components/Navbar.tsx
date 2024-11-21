import { useState } from 'react'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import MobileMenu from './MobileMenu'

interface NavbarProps {
  toggleTheme: () => void
  theme: string
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
    console.log('Mobile menu toggled:', !isMenuOpen) // Debugging the toggle behavior
  }

  return (
    <nav className="bg-gray-800 px-6 py-4 shadow-lg sticky top-0 z-10 border-b border-purple-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Doinitalash</div>
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            {theme === 'dark' ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button>
          {/* Desktop Links */}
          <a href="#about" className="hidden md:block hover:text-pink-500">About</a>
          <a href="#services" className="hidden md:block hover:text-pink-500">Services</a>
          <a href="#products" className="hidden md:block hover:text-pink-500">Products</a>
          <a href="#testimonials" className="hidden md:block hover:text-pink-500">Testimonials</a>
          <a href="#appointment" className="hidden md:block hover:text-pink-500">Book Appointment</a>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 md:hidden rounded-full bg-gray-700 hover:bg-gray-600 transition"
          >
            {isMenuOpen ? <FiX className="text-white text-base" /> : <FiMenu className="text-white text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
    </nav>
  )
}

export default Navbar
