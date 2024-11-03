import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contacts from "@/pages/Contacts";
import ThankYou from "@/pages/ThankYou";
import ShoppingCart from "@/pages/ShoppingCart";
import PaymentDetails from "@/pages/PaymentDetails";
import { AllProductsListView } from "./pages/AllProductsListView";
import Home from "@/pages/Home"; 
import "@progress/kendo-theme-default/dist/all.css";
import "@progress/kendo-theme-utils/dist/all.scss";
import { SizedParent } from "./components/SizedParent";

function App() {
  return (
    <Router>
      <SizedParent>
        <Header />
        <Routes>
        <Route path="/home" element={<Home />} />
          <Route path="/paymentdetails" element={<PaymentDetails />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/products" element={<AllProductsListView />} />
        </Routes>
        <Footer />
      </SizedParent>
    </Router>
  );
}

export default App;
