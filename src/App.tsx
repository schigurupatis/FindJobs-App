import React, { useState } from 'react'
import './index.css'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// @ts-ignore
import Layout from "./components/Layout"
// @ts-ignore
import Home from "./pages/Home"
// @ts-ignore
import Jobs from "./pages/Jobs"
// @ts-ignore
import Companies from "./pages/Companies"
// @ts-ignore
import Services from "./pages/Services"
// @ts-ignore
import Signup from "./pages/Signup"

function App() {
  // 1. Define the shared state here (Lifting State Up)
  const [jobs, setJobs] = useState([]);

  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 2. Pass jobs and setJobs as props to the pages that need them */}
        <Route path="/" element={<Home jobs={jobs} setJobs={setJobs} />} />
        <Route path="/jobs" element={<Jobs jobs={jobs} setJobs={setJobs} />} />
        
        <Route path="/companies" element={<Companies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App
