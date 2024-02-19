const body = document.querySelector("body");
body.style.backgroundImage = `url(${bgimg})`;
body.style.backgroundPosition = "center";
import { createRoot } from "react-dom/client";
import Header from "./header";
import SearchSection from "./searchSection";
import bgimg from '../assets/bgimage.jpg'
import "../scss/index.scss";
const root = createRoot(document.getElementById("root"));
const App = () => {
  return (
    <>
      <Header />
      <SearchSection />
    </>
  );
};

root.render(<App />);
