import "./App.css";
import Navbar from "./components/Navbar";
import { AppStyles, Globals } from "./components/App.styles";
import Hero from "./components/Hero";
import Security from "./components/Security";
import Rectangle from "./images/Rectangle 1 (1).png";
import Footer from "./components/Footer";

function App() {
  window.addEventListener("scroll", () => {
    window.scrollY > 100
      ? document.getElementById("nav").classList.add("white")
      : document.getElementById("nav").classList.remove("white");
    if (window.scrollY > 3276 && window.scrollY < 3800) {
      document.getElementById("customer").classList.add("sticky");
      document.getElementById("scroll").classList.add("sticky");
      console.log(window.scrollY);
    } else {
      document.getElementById("customer").classList.remove("sticky");
      document.getElementById("scroll").classList.remove("sticky");
    }
  });
  return (
    <AppStyles
      style={{
        backgroundImage: `url(${Rectangle})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "93% 0",
        backgroundSize: "380px 820px",
        minHeight: "100vh",
        paddingBottom: "1px",
      }}
    >
      <Globals />
      {/* <div
      > */}
      <Navbar />
      <Hero />
      {/* </div> */}
      <Security />
      <Footer />
    </AppStyles>
  );
}

export default App;
