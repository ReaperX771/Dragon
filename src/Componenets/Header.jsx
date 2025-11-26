import React from 'react'
import logo from '../assets/images/drag.jpg'
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'
import { Link } from 'react-router-dom' // If using React Router

function Header() {
  const timerRef = React.useRef(null)

  // Updated for Orange Dynasty - Sign Protocol Web3 app
  const ORANGE_SCHEME = 'orangedynasty://'
  const ANDROID_PACKAGE = 'com.orangedynasty.app' // Replace with actual package name
  const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.orangedynasty.app'
  const APP_STORE_URL = 'https://apps.apple.com/app/orange-dynasty/idYOUR_ACTUAL_APPSTORE_ID'
  const WEB_FALLBACK = 'https://orangedynasty.xyz' // Official website

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const openOrangeApp = (e) => {
    e.preventDefault()
    const ua = navigator.userAgent || navigator.vendor || window.opera

    // Android: try intent first
    if (/android/i.test(ua)) {
      const intentURI = `intent://#Intent;scheme=orangedynasty;package=${ANDROID_PACKAGE};end`
      window.location.href = intentURI
      
      timerRef.current = setTimeout(() => {
        window.location.href = PLAY_STORE_URL
      }, 1200)
      return
    }

    // iOS: try custom scheme, then fallback to App Store
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      window.location.href = ORANGE_SCHEME
      
      timerRef.current = setTimeout(() => {
        window.location.href = APP_STORE_URL
      }, 1200)
      return
    }

    // Desktop / unknown: open official website
    window.open(WEB_FALLBACK, '_blank', 'noreferrer')
  }

  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-between py-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
      
      {/* Content container with relative positioning */}
      <div className="relative z-10 w-full flex flex-col items-center justify-between h-full">

        {/* Logo watermark - subtle version */}
        <div className="w-full flex justify-center mt-4">
          <div className="w-24 h-24 rounded-full bg-black/40 backdrop-blur-sm border border-orange-500/30 flex items-center justify-center">
            <img 
              src={logo} 
              alt="Orange Dynasty Logo" 
              className="w-16 h-16 object-contain rounded-full"
            />
          </div>
        </div>

        {/* Centered content with glassmorphism effect */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          {/* Main write-up with glass card */}
          <div className="bg-black/40 backdrop-blur-md border border-orange-500/20 rounded-2xl p-8 max-w-2xl text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Orange Dynasty
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              The premier Web3 mobile app for Sign Protocol. Manage your on-chain attestations, 
              verify credentials, and interact with the decentralized signing ecosystem seamlessly.
            </p>
            
            {/* Learn More Button */}
            <Link 
              to="/dragon" // Change this to your desired route
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25 border border-orange-400/30"
            >
              Learn More
            </Link>
          </div>

          {/* Action buttons section */}
          <div className="mt-12 w-full flex flex-col items-center">
            {/* Decorative boxes with glow effect */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Orange Dynasty app button */}
              <a
                href="#"
                onClick={openOrangeApp}
                aria-label="Open Orange Dynasty App"
                className="group bg-orange-500/20 hover:bg-orange-500/40 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 rounded-xl p-4 w-24 h-24 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                <div className="text-center">
                  <img 
                    src={logo} 
                    alt="Orange Dynasty" 
                    className="w-12 h-12 object-contain mx-auto mb-1 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-xs text-orange-300 font-medium">Open App</span>
                </div>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com/OrangeDynastyXYZ" // Replace with actual Twitter
                aria-label="X (Twitter)"
                target="_blank"
                rel="noreferrer"
                className="group bg-orange-500/20 hover:bg-orange-500/40 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 rounded-xl p-4 w-24 h-24 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                <div className="text-center">
                  <FaTwitter className="text-3xl text-white mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-orange-300 font-medium">Twitter</span>
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/orangedynasty" // Replace with actual Telegram
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="group bg-orange-500/20 hover:bg-orange-500/40 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 rounded-xl p-4 w-24 h-24 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                <div className="text-center">
                  <FaTelegramPlane className="text-3xl text-white mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-orange-300 font-medium">Telegram</span>
                </div>
              </a>
            </div>

            {/* Download links */}
            <div className="mt-8 flex gap-6 items-center justify-center">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-orange-300 hover:text-orange-200 underline transition-colors"
              >
                Get on Google Play
              </a>
              <span className="text-orange-400">|</span>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-orange-300 hover:text-orange-200 underline transition-colors"
              >
                Download on App Store
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full text-center text-sm text-orange-300/80 pb-4 mt-8">
          © {new Date().getFullYear()} Orange Dynasty. All rights reserved.
        </div>
      </div>
    </section>
  )
}

export default Header