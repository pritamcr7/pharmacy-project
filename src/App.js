import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import { AuthProvider } from "./components/auth";
import Investigation from "./components/OPD/Investigation";
import Payment from "./components/payment/Payment";
import PaymentConfirmation from "./components/payment/PaymentConfirmation";
import Requisition from "./components/requisition/Requisition";
import RegistrationForm from "./components/registration/RegistrationForm";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/registration" element={<RegistrationForm />} />
          <Route exact path="/investigate" element={<Investigation />} />
          <Route exact path="/payment" element={<Payment />} />
          <Route
            exact
            path="/successpayment"
            element={<PaymentConfirmation />}
          />
          <Route exact path="/requisition" element={<Requisition />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
