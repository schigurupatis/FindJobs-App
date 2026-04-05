import React, {useState, useEffect} from 'react'
import JobCard from '../components/JobCard';
// const { getJson } = require("serpapi"); 

// REMOVE OR COMMENT OUT THIS BLOCK:
// getJson({
//   engine: "google_jobs",
//   q: "reactjs",
//   location: "India",
//   google_domain: "google.co.in",
//   hl: "en",
//   gl: "in",
//   api_key: "62a595f36f514ba5dc0917d0ac8e7129fca8b7200863a5520199387fc26ad76c"
// }, (json) => {
//   console.log(json["jobs_results"]);
// });

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const SERPAPI_API_KEY = import.meta.env.VITE_SERPAPI_API_KEY;
  const URL = `https://serpapi.com/search.json?engine=google_jobs&q=reactjs&location=India&google_domain=google.co.in&hl=en&gl=in&api_key=${SERPAPI_API_KEY}`;
  //const URL = 'https://serpapi.com/search.json?engine=google_jobs&q=Reactjs&location=Austin,+Texas,+United+States&google_domain=google.com&hl=en&gl=us'
  useEffect(()=> {
    const getJobs = async () => {
      try{
        const res = await fetch(URL)
        const data = await res.json()
        setJobs(data.jobs_results)
      }catch(err) {
        console.log("Error is:", err.message)
      }
    }
    getJobs()
  }, [SERPAPI_API_KEY])
  return (
    <>
        <div className="bg-[#F8F9FF] min-h-screen py-10">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header section for the list */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">
            Showing <span className="font-bold text-slate-900">{jobs.length}</span> jobs
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
          {jobs.map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Jobs
