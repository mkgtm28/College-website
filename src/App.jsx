import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AdmissionForm from "./pages/AdmissionForm";
import About from "./pages/About";
import Enquiry from "./pages/Enquiry";
import Jobs from "./pages/Jobs";
import Updates from "./pages/Updates";
import SubmissionSent from "./pages/SubmissionSent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<AdmissionForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/submission-sent" element={<SubmissionSent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
