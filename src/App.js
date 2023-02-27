// import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./componentes/NavBar/NavBar";
import { Banner } from "./componentes/Banner/Banner";
import { Skills } from "./componentes/Skills/Skills";
import { Projects } from "./componentes/Projects/Projects";
import { Footer } from "./componentes/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
