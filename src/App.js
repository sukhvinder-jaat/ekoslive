import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import { Hero } from "./components/Hero";
import { What } from "./components/What";
import { About } from "./components/About";
import { Features } from "./components/Features";
// import "@splidejs/react-splide/css";
import AOS from "aos";
import "@splidejs/react-splide/css/skyblue";
import { Supported } from "./components/Supported";
import { Integrations } from "./components/Integrations";
import { Lease } from "./components/Lease";
import { MyFooter } from "./components/MyFooter";
import { Community } from "./components/Community";
import Preloader from "./components/Preloader";
import { BackTop } from "./components/BackTop";
import "aos/dist/aos.css";
import { Demo } from "./components/Demo";
import Pricing from "./components/Pricing";
// import "@splidejs/react-splide/css/sea-green";
function App() {
  AOS.init({ once: "true", disable: "mobile" });
  return (
    <div className="App overflow-hidden bg-black">
      {/* <MyNav /> */}
      <BackTop />
      <Preloader />
      <Hero />
      <What />
      <About />
      <Features />
      <Supported />
      <Integrations />
      <Lease />
      <Community />
      <Pricing />
      <Demo />
      <MyFooter />
    </div>
  );
}

export default App;
