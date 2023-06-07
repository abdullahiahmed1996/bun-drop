import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Menu from "./Components/Menu";
import OrderMenu from "./Components/OrderMenu";
import Checkout from "./Components/Checkout";
import Navbar from "./Components/Navbar";
import Confirm from "./Routes/Confirm";
import About from "./Routes/About";

function App() {
  return (
    <div>
      <header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/menu"} element={<Menu />} />
          <Route path={"/ordermenu"} element={<OrderMenu />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/confirm"} element={<Confirm />} />
          <Route path={"/navbar"} element={<Navbar />}/>
          <Route path={"/about"} element={<About />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
