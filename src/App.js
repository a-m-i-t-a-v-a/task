import { BrowserRouter,Route,Routes } from "react-router-dom";
import Register from "./components/Register";
import ProductList from "./components/ProductList";
import Otp from "./components/Otp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<Register/>}/>
         <Route path='/productlist' element={<ProductList/>}/>
         <Route path='/otp' element={<Otp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
