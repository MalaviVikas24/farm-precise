import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Market from "./pages/Market";
import Training from "./pages/Training";
import Forum from "./pages/Forum";
import FPOProducts from "./pages/FPOProducts";
import Home from "./pages/Home";
import PriceChart from "./components/PriceChart";
import Portfolio from "./portfolio/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/market" element={<Market />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fpo_products" element={<FPOProducts />} />
        <Route path="/charts" element={<PriceChart />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
