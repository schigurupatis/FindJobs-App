import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        

        {/* Bottom Copyright Bar */}
        <div className="border-gray-100">
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
