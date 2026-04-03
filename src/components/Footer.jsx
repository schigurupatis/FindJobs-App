import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
          
          {/* Logo and Socials */}
          <div className="flex-1 max-w-xs">
            <div className="flex items-center gap-1 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">JA</div>
              <span className="text-xl font-black text-blue-900 tracking-tighter">Jobs-App</span>
            </div>
            <p className="text-sm font-semibold text-gray-700 mb-4">Connect with us</p>
            <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
              {/* Replace # with your social links */}
              <a href="#" className="hover:opacity-100"><img src="https://flat-icon.com" className="w-5 h-5" alt="FB" /></a>
              <a href="#" className="hover:opacity-100"><img src="https://flat-icon.com" className="w-5 h-5" alt="IG" /></a>
              <a href="#" className="hover:opacity-100"><img src="https://flat-icon.com" className="w-5 h-5" alt="X" /></a>
              <a href="#" className="hover:opacity-100"><img src="https://flat-icon.com" className="w-5 h-5" alt="IN" /></a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-[2]">
            <div>
              <ul className="space-y-3">
                {['About us', 'Careers', 'Employer home', 'Sitemap', 'Credits'].map(link => (
                  <li key={link}><a href="#" className="text-[13px] text-gray-600 hover:text-blue-600">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {['Help center', 'Summons/Notices', 'Grievances', 'Report issue'].map(link => (
                  <li key={link}><a href="#" className="text-[13px] text-gray-600 hover:text-blue-600">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {['Privacy policy', 'Terms & conditions', 'Fraud alert', 'Trust & safety'].map(link => (
                  <li key={link}><a href="#" className="text-[13px] text-gray-600 hover:text-blue-600">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* App Download Card */}
          <div className="flex-1 max-w-sm">
            <div className="border border-gray-100 rounded-2xl p-6 shadow-sm">
              <h4 className="text-[15px] font-bold text-gray-900 mb-1">Apply on the go</h4>
              <p className="text-[12px] text-gray-500 mb-5">Get real-time job updates on our App</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center gap-2 bg-[#0E1724] text-white px-3 py-2 rounded-lg hover:bg-black transition-colors w-full">
                   <div className="text-left"><p className="text-[8px] uppercase">Get it on</p><p className="text-xs font-bold leading-tight">Google Play</p></div>
                </button>
                <button className="flex items-center gap-2 bg-[#0E1724] text-white px-3 py-2 rounded-lg hover:bg-black transition-colors w-full">
                   <div className="text-left"><p className="text-[8px] uppercase">Download on the</p><p className="text-xs font-bold leading-tight">App Store</p></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-gray-100 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                
                {/* Left Side */}
                <div className="text-sm font-bold text-gray-400 tracking-tight">
                Designed & Developed for Educational Purpose
                </div>

                {/* Right Side */}
                <div className="text-sm font-bold text-gray-400 tracking-tight">
                Santha Kumar Chigurupati
                </div>
                
            </div>
            </div>


      </div>
    </footer>
  );
};

export default Footer;
