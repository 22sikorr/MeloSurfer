import { createRoot } from "react-dom/client";
import Header from "./header";
import SearchSection from "./searchSection";

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
