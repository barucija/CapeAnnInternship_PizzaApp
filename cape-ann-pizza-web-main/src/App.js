import Header from "./components/header/Header";
import PizzaDisplay from "./components/pizzaDisplay/PizzaDisplay";
import Search from "./components/Search";
import {BrowserRouter as Router, Link, Routes, Route, useLocation} from 'react-router-dom'
import Searched from "./pages/Searched";
import Category from "./components/Category";
import CategoryFilter from "./pages/CategoryFilter";
import PizzaDetails from "./pages/pizzaDetails/PizzaDetails";
import {AnimatePresence} from 'framer-motion'
import Footer from "./components/footer/Footer";
import AddPizza from './pages/addPizza/AddPizza';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <AnimatePresence exitBeforeEnter>
    <Router>
     <Header/>
     {/* <Search /> */}
     <Category />
     <PizzaDisplay />
     <Routes >
      <Route path={"/search/:search"} element={<Searched/>} />
      <Route path={"/category/:cat"} element={<CategoryFilter/>} /> 
      <Route path={"/pizza/:id"} element={<PizzaDetails/>} /> 
      <Route path={"/addPizza"} element={<AddPizza/>} /> 
     </Routes>

     <Footer />
    </Router>
    </AnimatePresence>
    
    <ToastContainer />

    </>
  );
}

export default App;
