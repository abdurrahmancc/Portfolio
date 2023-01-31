import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Portfolio from "./Components/Portfolio/Portfolio";
import PortfolioCardDetails from "./Components/Portfolio/PortfolioCardDetails";
import Resume from "./Components/Resume/Resume";
import Services from "./Components/Sidebar/Services/Services";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(e.target.scrollY);
    });
  }, []);
  return (
    <div>
      <Sidebar>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/resume" element={<Resume></Resume>}></Route>
          <Route
            path="/project-details/:id"
            element={<PortfolioCardDetails></PortfolioCardDetails>}
          ></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="*" element={<Home></Home>}></Route>
        </Routes>
        <Toaster />
      </Sidebar>
    </div>
  );
}

export default App;
