import React from 'react'

const JobCard = ({ job }) => {
    // Extract all fields from the job prop
  const { 
    title, 
    company_name, 
    location, 
    thumbnail, 
    description, 
    extensions, 
    via 
  } = job;

   // Helper values for extensions
  const postedAt = extensions?.[0] || "Recently";
  const jobType = extensions?.[1] || "Full-time";

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer mb-4 group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
            {title}
          </h2>
          <p className="text-sm font-semibold text-gray-700 mt-0.5">{company_name}</p>
        </div>
        
        <div className="w-12 h-12 border border-gray-50 rounded-xl flex items-center justify-center bg-white overflow-hidden shrink-0 ml-4 shadow-sm">
          {thumbnail ? (
            <img src={thumbnail} alt={company_name} className="w-full h-full object-contain p-1" />
          ) : (
            <span className="text-xs font-bold text-gray-300">LOGO</span>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
        <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
          <svg className="size-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {location}
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 text-[13px]">
          <svg className="size-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.25V4.606c0-.596-.511-1.05-1.106-1.026a10.023 10.023 0 00-4.63 1.155L12 6.5" /></svg>
          {jobType}
        </div>
      </div>

      <p className="text-[13px] text-gray-500 line-clamp-2 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {extensions?.slice(2, 5).map((ext, index) => (
          <span key={index} className="text-[11px] font-medium text-blue-600 bg-blue-50/50 px-2.5 py-1 rounded-full border border-blue-100">
            {ext}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <div className="flex flex-col">
          <span className="text-[11px] text-gray-400 font-medium italic">via {via}</span>
          <span className="text-[11px] text-gray-500 font-bold mt-0.5">{postedAt}</span>
        </div>
        <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
        </button>
      </div>
    </div>
  )
}

export default JobCard