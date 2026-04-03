import './index.css'
import './App.css'

// @ts-ignore: module has no declaration file, Layout is JS component
import Layout from "./components/Layout"
// import Home from "./pages/Home"
// @ts-ignore
import Services from "./pages/Services"
// @ts-ignore
import Jobs from "./pages/Jobs"
// @ts-ignore
import Companies from "./pages/Companies"
// @ts-ignore
import Home from "./pages/Home"

import { Routes, Route } from 'react-router'


function App() {
  return (
    <>
      

      {/* <BrowserRouter> */}
        <Routes>
          {/* The parent Route handles the common Header and Footer */}
          <Route element={<Layout />}>
            {/* These children will render inside the <Outlet /> of Layout */}
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/services" element={<Services />} />
          </Route>
        </Routes>
      {/* </BrowserRouter> */}

      <Layout />
    </>
  )
}

export default App