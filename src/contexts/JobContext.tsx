import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Job {
  id: string;
  title: string;
  // Add other properties as needed
}

interface JobContextType {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>([]);

  return (
    <JobContext.Provider value={{ jobs, setJobs }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = (): JobContextType => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobs must be used within a JobProvider");
  }
  return context;
};