import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/projects"
import Skills from "./pages/skills"
import Contact from "./pages/contact"
import Resume from "./pages/resume"
import ProjectDetails from "./pages/projectdetails"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="relative min-h-screen">

        <div className=" fixed inset-0 bg-[url('/background-img.jpg')] bg-cover bg-center blur-sm scale-110 -z-20" />

        <div className=" fixed inset-0 bg-[#F8F4EC]/90 -z-10 "/>

        <Navbar />

        <main className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />

            <Route path="/skills" element={<Skills />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/resume" element={<Resume />} />

          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter >
  )
}

export default App