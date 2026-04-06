import React from "react";
import { useJobs } from "../contexts/JobContext";

const Companies = () => {
  const { jobs } = useJobs();

  // ✅ extract unique companies
  const companies = [
    ...new Set(jobs.map((job) => job.company_name))
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-2xl font-bold mb-6">
        Companies
      </h1>

      {companies.length === 0 && (
        <p>No companies found</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {companies.map((company, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow hover:shadow-md cursor-pointer"
          >
            {company}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;