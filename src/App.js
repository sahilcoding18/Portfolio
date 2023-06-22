import About from "./components/About";
import Contact from "./components/Contact";
import Expirence from "./components/experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
function App() {
  return (
    // <div><h1 className="text-6xl font-bold font-signature">Hello</h1></div>
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Expirence/>
      <Contact/>
    </div>
  );
}

export default App;
