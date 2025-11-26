import React from 'react'
import { Link } from 'react-router-dom'

function Dragon() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back to Home Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          to="/"
          className="bg-orange-500/20 hover:bg-orange-500/40 border border-orange-500/30 hover:border-orange-500/50 text-orange-300 hover:text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center space-x-2"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Dragon</span>{' '}
            <span className="text-orange-500">Clan</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The vanguard of Orange Dynasty - Enlightening the world about Sign Protocol
          </p>
        </div>
      </section>

      {/* What Sign Dragon is Building */}
      <section className="py-16 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">What </span>
            <span className="text-orange-500">Sign Dragon</span>
            <span className="text-white"> is Building</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-orange-500/20">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Educational Hub</h3>
              <p className="text-gray-300">
                Creating comprehensive learning resources about Sign Protocol and decentralized identity verification.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-orange-500/20">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">Community Network</h3>
              <p className="text-gray-300">
                Building a strong community of Web3 enthusiasts, developers, and early adopters.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-orange-500/20">
              <h3 className="text-xl font-semibold text-orange-400 mb-4">On-Ramp Platform</h3>
              <p className="text-gray-300">
                Developing tools and pathways to onboard new users into the Orange Dynasty ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Sign Dragon */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">What is </span>
            <span className="text-orange-500">Sign Dragon</span>
          </h2>
          
          <div className="bg-gray-800/30 p-8 rounded-2xl border border-orange-500/30">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Sign Dragon is the elite clan within Orange Dynasty dedicated to spreading awareness 
              and knowledge about Sign Protocol - the revolutionary standard for on-chain attestations 
              and decentralized identity management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are the torchbearers who illuminate the path for newcomers, the educators who 
              demystify complex Web3 concepts, and the community builders who create meaningful 
              connections in the decentralized world.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-orange-500">About</span>
            <span className="text-white"> Us</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              Dragon Clan emerged from the core team of Orange Dynasty, born from a shared vision 
              to make Sign Protocol accessible to everyone. We believe that decentralized identity 
              and on-chain attestations should not be confined to technical experts.
            </p>
            <p>
              Our team comprises Web3 pioneers, educators, and community leaders who have been 
              in the blockchain space since its early days. We've witnessed the evolution of 
              decentralized technologies and understand the importance of proper education and 
              community support.
            </p>
            <p>
              We're not just building technology; we're building understanding. We're not just 
              creating protocols; we're creating pathways for mass adoption.
            </p>
          </div>
        </div>
      </section>

      {/* Our Aim and Goals */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-white">Our </span>
            <span className="text-orange-500">Aim & Goals</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/30">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">Our Mission</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Democratize access to Sign Protocol education</li>
                <li>• Onboard 100,000+ users to Orange Dynasty</li>
                <li>• Create the largest Sign Protocol community</li>
                <li>• Bridge the gap between Web2 and Web3</li>
              </ul>
            </div>
            
            <div className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/30">
              <h3 className="text-2xl font-semibold text-orange-400 mb-4">Our Vision</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Make decentralized identity mainstream</li>
                <li>• Establish industry standards for on-chain attestations</li>
                <li>• Create self-sustaining educational ecosystems</li>
                <li>• Pioneer new use cases for Sign Protocol</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-black to-orange-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-white">Ready to Join the </span>
            <span className="text-orange-500">Revolution?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            The future of decentralized identity is being written now. Don't just watch from 
            the sidelines - become part of the movement that's shaping how the world interacts 
            with Web3 technology.
          </p>
          
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 border border-orange-400/30">
            Join Us Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-orange-500/20 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">
                <span className="text-white">Dragon</span>
                <span className="text-orange-500">Clan</span>
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Part of the Orange Dynasty Ecosystem
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                Privacy
              </a>
              <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">
                Home
              </Link>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Dragon Clan - Orange Dynasty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Dragon