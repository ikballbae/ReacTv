import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
function Nav() {
  // State untuk melacak apakah navbar di-scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener ketika komponen dilepas
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return (
      <div className={`navbar bg-base-200 sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link>Popular</Link></li>
              <li><Link>Top Rated</Link></li>
              <li><Link>Upcoming</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-xl text-white">ReacTv</Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-gold indicator-item text-sm">1</span>
            </div>
          </button>
        </div>
      </div>
    );
}

export default Nav;