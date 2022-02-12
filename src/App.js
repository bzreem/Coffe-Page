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
  return (
    <main className="App">
      <Header />
      <SectionHome />
      <SectionAbout />
      <SectionOurMenu />
      <SectionOurProducts />
      <SectionCustomers />
      <SectionContact />
      <SectionOurBlogs />
      <Footer/>
    </main>
  );
}

export default App;
