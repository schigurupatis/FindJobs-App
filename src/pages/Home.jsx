import { useState } from "react";
import Search from "../components/Search";
import JobCard from "../components/JobCard";


const Home = () => {
  const [jobs, setJobs] = useState([]);

  return (
    <>
      <Search setJobs={setJobs} />

      {/* Show results below search */}
      <div className="max-w-3xl mx-auto px-4 mt-10">
        {jobs.length > 0 && (
          <>
            <p className="mb-4 font-bold">{jobs.length} Jobs Found</p>

            {jobs.map((job) => (
              <JobCard key={job.job_id} job={job} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Home;