import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";
import WhatCanIDo from "./components/WhatCanIDo/WhatCanIDo";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <WhatCanIDo></WhatCanIDo>
      <Service></Service>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
