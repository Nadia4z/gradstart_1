
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import LanguageToggle from "./components/LanguageToggle";

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
          <h1 className="text-xl font-bold text-blue-600">GradStart</h1>
          <nav className="flex gap-4">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/platform" className="hover:text-blue-600">Platform Kami</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <Link to="/faq" className="hover:text-blue-600">FAQ</Link>
          </nav>
          <LanguageToggle />
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <footer className="text-center text-sm text-gray-400 py-4">
          © 2025 GradStart. Empowering Fresh Graduates.
        </footer>
      </div>
    </Router>
  );
}
