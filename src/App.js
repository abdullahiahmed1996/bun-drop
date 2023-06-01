import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Menu from "./Components/Menu";
import OrderMenu from "./Components/OrderMenu";
import Checkout from "./Components/Checkout";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/menu"} element={<Menu />} />
          <Route path={"/ordermenu"} element={<OrderMenu />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/navbar"} element={<Navbar />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
