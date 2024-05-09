import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Rootlayouts from "./layouts/Rootlayouts";
import Portfolio from "./pages/Portfolio";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Teams from "./pages/Teams";
import Methodology from "./pages/Methodology";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Rootlayouts />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/methodology" element={<Methodology />} />
            </Route>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/*" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
