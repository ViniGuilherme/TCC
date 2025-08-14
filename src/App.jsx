import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Petshops from "./pages/Petshops";
import PetshopDetails from "./pages/PetshopDetails";
import Agendamento from "./pages/Agendamento";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petshops" element={<Petshops />} />
          <Route path="/petshop/:id" element={<PetshopDetails />} />
          <Route path="/agendamento/:id" element={<Agendamento />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;