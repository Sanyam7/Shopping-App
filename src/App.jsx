import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

const App = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-slate-900">
        <Navbar />
      </div>

      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
