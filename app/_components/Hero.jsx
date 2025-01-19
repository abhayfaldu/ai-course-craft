import React from 'react'
import Link from 'next/link'

function Hero() {
  return (
    <section className="flex-grow bg-gray-900 text-white h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:items-center h-full flex flex-col justify-center">
        {/* Header Content */}
        <div className="mx-auto text-center flex-grow mt-16">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            <span className="sm:block"> AI Course Craft </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-lg text-white/80">
            AI Course Generator: Revolutionizing Personalized Learning
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/dashboard"
              className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* AI Features */}
        <div className="z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-screen-xl mx-auto">
          <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">AI Course Generator</h3>
            <p className="text-white/80 mt-2">
              Generate personalized courses based on student progress and needs. Leverage the power
              of AI to create tailored content.
            </p>
          </div>

          <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">Interactive Quizzes</h3>
            <p className="text-white/80 mt-2">
              Build interactive quizzes that engage students and provide instant feedback using
              AI-generated questions.
            </p>
          </div>

          <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">Progress Analytics</h3>
            <p className="text-white/80 mt-2">
              Track student progress with detailed analytics and suggestions for improving learning
              outcomes.
            </p>
          </div>

          <div className="bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-yellow-300">Seamless Integration</h3>
            <p className="text-white/80 mt-2">
              Easily integrate with popular platforms to streamline the teaching experience and
              connect with students.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
