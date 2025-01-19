import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 text-white">
      {/* Logo and Title */}
      <div className="flex items-center space-x-3">
        <Image src="/logo.svg" width={50} height={50} alt="AI Course Craft Logo" />
        <h1 className="text-2xl font-extrabold tracking-wide text-black">AI Course Craft</h1>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8">
        <a
          href="#features"
          className="text-lg font-medium hover:text-yellow-400 transition duration-300"
        >
          Features
        </a>
        <a
          href="#testimonials"
          className="text-lg font-medium hover:text-yellow-400 transition duration-300"
        >
          Testimonials
        </a>
        <a
          href="#pricing"
          className="text-lg font-medium hover:text-yellow-400 transition duration-300"
        >
          Pricing
        </a>
        <a
          href="#faq"
          className="text-lg font-medium hover:text-yellow-400 transition duration-300"
        >
          FAQ
        </a>
      </nav>

      {/* Call to Action */}

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none hover:text-yellow-400 transition duration-300"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
