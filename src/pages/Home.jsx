import React from 'react';
import Search from '../components/Search';
import JobCard from '../components/JobCard';

const Home = ({ jobs, setJobs }) => {
  return (
    <div>
      <Search setJobs={setJobs} />
      <div className="max-w-3xl mx-auto py-10 px-4">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard key={job.job_id || job.id} job={job} />
          ))
        ) : (
          <p className="text-center text-gray-400">Search for jobs to see results.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
