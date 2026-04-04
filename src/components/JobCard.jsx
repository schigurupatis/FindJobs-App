import React from 'react'

const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer mb-4 relative">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
            {job.title}
          </h2>
          <p className="text-sm font-semibold text-gray-700 mt-1">{job.company}</p>
        </div>
        {/* Company Logo Placeholder */}
        <div className="w-12 h-12 border border-gray-100 rounded-lg flex items-center justify-center bg-gray-50 overflow-hidden">
          <span className="text-xs font-bold text-gray-400">{job.logoText}</span>
        </div>
      </div>

      {/* Job Details Row */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 13.25V4.606c0-.596-.511-1.05-1.106-1.026a10.023 10.023 0 00-4.63 1.155L12 6.5l-3.264-1.765a10.023 10.023 0 00-4.63-1.155C3.511 3.556 3 4.01 3 4.606v8.644m18 0a10.022 10.022 0 01-4.502 8.358m4.502-8.358c-.595-.024-1.106.43-1.106 1.026v5.82a1 1 0 01-1.555.832l-3.339-2.226m-9 0l-3.34 2.226A1 1 0 013 19.82v-5.82c0-.596-.511-1.05-1.106-1.026a10.022 10.022 0 014.502-8.358" /></svg>
          {job.experience}
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
           <span>₹</span> {job.salary}
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
          {job.location}
        </div>
      </div>

      {/* Description Preview */}
      <p className="text-sm text-gray-500 line-clamp-1 mb-4">
        {job.description}
      </p>

      {/* Skills/Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map((tag) => (
          <span key={tag} className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer of Card */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <span className="text-[11px] text-gray-400 font-medium">{job.postedAt}</span>
        <button className="flex items-center gap-1 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors">
          <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
          Save
        </button>
      </div>
    </div>
  )
}

export default JobCard