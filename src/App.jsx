import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { useState } from "react";

function App() {
  //setting menuopen to false from the intial opening of the site. We then pass this function into the topbar component
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro />
       <About />
       <Portfolio />
       <Contact />
     </div>
    </div>
  );
}

export default App;
