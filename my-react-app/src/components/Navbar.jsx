import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)

  const aboutMenuItems = [
    { name: "About Us", href: "/about-us" },
    { name: "Chairman's Message", href: "/chairman-message" },
    { name: "Narayana Initiatives", href: "/initiatives" },
    { name: "News", href: "/news" },
    { name: "Awards", href: "/awards" },
    { name: "School Song", href: "/school-song" },
    { name: "Social Outreach", href: "/social-outreach" },
    { name: "School Brochure", href: "/brochure" }
  ]

  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById('enquiry-form')
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToInfoSection = () => {
    const infoSection = document.getElementById('info-section')
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 text-xs hover:text-blue-200 transition-colors duration-200 hover:scale-105 transform">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium text-xs">Download Brochure</span>
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 hover:bg-white/30 transition-all duration-200">
                  <input
                    type="text"
                    placeholder="Search Narayana school near you"
                    className="bg-transparent text-white placeholder-white/70 text-xs outline-none flex-1 min-w-[150px]"
                  />
                  <svg className="w-3 h-3 text-white/70 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button 
                onClick={scrollToEnquiry}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-200">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div>
                <div className="text-sm font-bold">Narayana's Sec. & Higher Sec. School</div>
                <div className="text-xs text-blue-200">Since 2009</div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              {/* About Dropdown */}
              <div className="relative group">
                <button 
                  className="text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-1 text-sm"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <span>About Narayana</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link
                      to="/about-narayan"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      About Narayan
                    </Link>
                    {aboutMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-sm"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="relative group">
                <button 
                  onClick={scrollToInfoSection}
                  className="text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-1 text-sm"
                >
                  <span>Why Narayana</span>
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Admissions Link - Scrolls to Enquiry Form */}
              <div className="relative group">
                <button 
                  onClick={scrollToEnquiry}
                  className="text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-1 text-sm"
                >
                  <span>Admissions</span>
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <Link to="/locations" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Locations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              <Link to="/careers" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Careers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              <Link to="/blogs" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Blogs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              <Link to="/alumni" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Alumni
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              <Link to="/contact" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-1 rounded-lg hover:bg-white/20 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-blue-500">
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Home</Link>
                
                {/* Mobile About Section */}
                <div className="space-y-1">
                  <div className="text-white py-1 px-3 text-sm font-medium">About Narayana</div>
                  <Link 
                    to="/about-narayan"
                    className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-6 rounded-lg hover:bg-white/10 text-sm"
                  >
                    About Narayan
                  </Link>
                  {aboutMenuItems.map((item, index) => (
                    <a 
                      key={index}
                      href={item.href} 
                      className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-6 rounded-lg hover:bg-white/10 text-sm"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToInfoSection}
                  className="text-left text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                >
                  Why Narayana
                </button>
                <button 
                  onClick={scrollToEnquiry}
                  className="text-left text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                >
                  Admissions
                </button>
                <Link to="/locations" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Locations</Link>
                <Link to="/careers" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Careers</Link>
                <Link to="/blogs" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Blogs</Link>
                <Link to="/alumni" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Alumni</Link>
                <Link to="/contact" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar 