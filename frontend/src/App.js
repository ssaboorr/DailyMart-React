import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import ProductScreen from "./screens/ProductScreen"
const App = () => {
  return (
    <>
      <Header />

     <Routes>

       <Route path='/' element={<HomeScreen/>} />
       <Route path='/product/:id' element={<ProductScreen/>} />

     </Routes>
      <Footer />
    </>
  );
};

export default App;
