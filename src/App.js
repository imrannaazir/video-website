import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
