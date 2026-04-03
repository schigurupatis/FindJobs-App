import React from 'react';

const Hero = () => {
  return (
    <section className=" pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-[44px] font-extrabold text-slate-900 mb-2">
          Find your dream job now
        </h1>
        <p className="text-lg text-gray-600 mb-10 font-medium">
          5 lakh+ jobs for you to explore
        </p>

        {/* Floating Search Bar */}
        <div className="max-w-5xl mx-auto bg-white rounded-full shadow-2xl shadow-blue-100/50 p-1 flex flex-col md:flex-row items-center border border-gray-100">
          
          {/* Section 1: Skills */}
          <div className="flex items-center flex-[1.5] w-full px-6 py-3">
            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input 
              type="text" 
              placeholder="Enter skills / designations / companies" 
              className="w-full text-[15px] focus:outline-none placeholder:text-gray-400 text-gray-700"
            />
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-gray-200"></div>

          {/* Section 2: Experience */}
          <div className="flex items-center flex-1 w-full px-6 py-3 cursor-pointer">
            <select className="w-full bg-transparent text-[15px] text-gray-500 focus:outline-none appearance-none cursor-pointer">
              <option>Select experience</option>
              <option>Fresher (0 years)</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
            </select>
            <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
          </div>

          <div className="hidden md:block w-[1px] h-8 bg-gray-200"></div>

          {/* Section 3: Location */}
          <div className="flex items-center flex-1 w-full px-6 py-3">
            <input 
              type="text" 
              placeholder="Enter location" 
              className="w-full text-[15px] focus:outline-none placeholder:text-gray-400 text-gray-700"
            />
          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto bg-[#457EFF] hover:bg-blue-600 text-white font-bold px-10 py-4 rounded-full transition-all text-lg">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
