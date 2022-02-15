import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionAbout from "./components/SectionAbout";
import SectionContact from "./components/SectionContact";
import SectionCustomers from "./components/SectionCustomers";
import SectionHome from "./components/SectionHome";
import SectionOurBlogs from "./components/SectionOurBlogs";
import SectionOurMenu from "./components/SectionOurMenu";
import SectionOurProducts from "./components/SectionOurProducts";

function App() {
  let trolleyCapt = JSON.parse(localStorage.getItem("trolley")) || [];
  const [trolley, setTrolley] = useState(trolleyCapt);

  useEffect(() => {
    localStorage.setItem("trolley", JSON.stringify(trolley));
  }, [trolley]);
  return (
    <main className="App">
      <Header trolley={trolley} setTrolley={setTrolley} />
      <SectionHome />
      <SectionAbout />
      <SectionOurMenu trolley={trolley} setTrolley={setTrolley} />
      <SectionOurProducts />
      <SectionCustomers />
      <SectionContact />
      <SectionOurBlogs />
      <Footer />
    </main>
  );
}

export default App;
