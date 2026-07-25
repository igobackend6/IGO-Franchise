import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import WhyIgoPage from "./pages/WhyIgoPage";
import ProcessPage from "./pages/ProcessPage";
import InvestmentPage from "./pages/InvestmentPage";
import FAQPage from "./pages/FAQPage";
import ApplyPage from "./pages/ApplyPage";
import NotFoundPage from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/why-igo" element={<WhyIgoPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
