import React from 'react';
import { useParams, Link } from 'react-router';

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  // In a real app, you'd fetch this by ID from an API
  const job = jobs.find((j) => j.job_id === id || j.id?.toString() === id);

  if (!job) return <div className="p-20 text-center">Job not found</div>;

  return (
    <div className="bg-[#F8F9FF] min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link> / <span>Job Details</span>
        </nav>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Header Section */}
          <div className="p-8 border-b border-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h1>
                <p className="text-gray-700 font-semibold">{job.company_name}</p>
                <div className="flex gap-4 mt-4 text-sm text-gray-500">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.extensions?.[1] || 'Full-time'}</span>
                </div>
              </div>
              <img src={job.thumbnail} className="w-16 h-16 rounded-xl border p-1" alt="logo" />
            </div>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-10 py-2.5 rounded-full font-bold hover:bg-blue-700 shadow-lg shadow-blue-100">
                Apply
              </button>
              <button className="border border-blue-600 text-blue-600 px-10 py-2.5 rounded-full font-bold hover:bg-blue-50">
                Save
              </button>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Job description</h3>
            <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
              {job.description}
            </div>

            {/* Key Skills */}
            <div className="mt-8">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.extensions?.slice(2).map((skill, i) => (
                  <span key={i} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs text-gray-500">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
