import { useState, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [registration, setRegistration] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [age, setage] = useState(null);
  const [booking, setbooking] = useState("");
  const [amount, setamount] = useState(null);
  const [doctor, setdoctor] = useState("");
  const [paymentID, setpaymentID] = useState(null);

  const patientDetails = (reg, fname, lname, startDate, doc) => {
    setRegistration(reg);
    setfirstName(fname);
    setlastName(lname);
    let today = new Date();

    let age_now = today.getFullYear() - startDate.getFullYear();
    let m = today.getMonth() - startDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
      age_now--;
    }
    setage(age_now);
    setdoctor(doc);
  };

  const bookingProcess = (book) => {
    // "LAB" or "APPOINTMENT"
    setbooking(book);
  };

  const paymentDetails = (value, id) => {
    setamount(value);
    setpaymentID(id);
  };

  return (
    <AuthContext.Provider
      value={{
        registration,
        firstName,
        lastName,
        age,
        doctor,
        patientDetails,
        booking,
        bookingProcess,
        amount,
        paymentID,
        paymentDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
