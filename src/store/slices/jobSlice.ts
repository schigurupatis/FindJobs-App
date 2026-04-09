import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define Job type (basic for now)
type Job = {
  job_id: string;
  title: string;
  company_name: string;
};

// Async thunk
export const fetchJobs = createAsyncThunk<Job[], { query: string; location: string }>(
  "jobs/fetchJobs",
  async ({ query, location }) => {
    const API_KEY = import.meta.env.VITE_SERPAPI_API_KEY;

    const URL = `https://serpapi.com/search.json?engine=google_jobs&q=${query}&location=${location}&api_key=${API_KEY}`;

    const res = await fetch(URL);
    const data = await res.json();

    return data.jobs_results || [];
  }
);

// State type
type JobState = {
  jobs: Job[];
  loading: boolean;
  error: string | null;
};

const initialState: JobState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
  },
});

export default jobSlice.reducer;