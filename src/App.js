import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./paginas/Layout";
import Home from "./paginas/Home";
import NoPage from "./paginas/Error";
import Contact from "./paginas/Contactos";
import Info from "./paginas/UnPocoDeMi";
import Creations from "./paginas/Creaciones";
import Creation from "./paginas/CreacionSeleccionada";
import Favorite from "./paginas/MisFavoritos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Info" element={<Info />} />    
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/Creation/:name" element={<Creation />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Creations" element={<Creations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);