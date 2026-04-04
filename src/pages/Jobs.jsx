import React from 'react'
import JobCard from '../components/JobCard';

const Jobs = () => {
  // Sample Data matching the screenshot
  const jobItems = [
    {
      id: 1,
      title: "Fullstack Developer - US MNC",
      company: "US MNC (analytics)",
      logoText: "MNC",
      experience: "3-6 Yrs",
      salary: "10-20 Lacs PA",
      location: "Hybrid - Noida, Gurugram",
      description: "Ensure scalability, security, and performance of developed applications. Experience in React.js and Node.js is required.",
      tags: ["React.js", "Node.js", "Full Stack", "Javascript"],
      postedAt: "2 days ago"
    },
    {
      id: 2,
      title: "Lead UI Developer - Reactjs",
      company: "Xebia IT Architects",
      logoText: "Xebia",
      experience: "6-11 Yrs",
      salary: "40-55 Lacs PA",
      location: "Hybrid - Bengaluru",
      description: "Optimize components for maximum performance across a wide range of devices. Leading a team of 5 developers.",
      tags: ["React Native", "Typescript", "Design Patterns", "Frontend"],
      postedAt: "1 week ago"
    }
  ];
  return (
    <>
        <div className="bg-[#F8F9FF] min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header section for the list */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-bold text-slate-900">{jobItems.length}</span> jobs
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Sort by:</span>
            <select className="bg-transparent text-sm font-bold text-slate-900 focus:outline-none cursor-pointer">
              <option>Relevance</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Dynamic List Rendering */}
        <div className="space-y-4">
          {jobItems.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Jobs