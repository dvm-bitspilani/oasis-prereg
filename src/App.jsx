
import React from "react";
import { Routes, Route, useLocation , Navigate} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./routes/components/AuthProvider.jsx";
import LandingPage from "./routes/components/LandingPage/LandingPage.jsx";
import HomePage from "./routes/components/HomePage/HomePage.jsx";
import ProfilePage from "./routes/components/ProfilePage/ProfilePage.jsx";
import RapWarsForm from "./routes/components/Form/RapWarsForm.jsx";
import PurpleProseForm from "./routes/components/Form/PurpleProseForm.jsx";
import StandupSoapboxForm from "./routes/components/Form/StandupSoapboxForm.jsx";
import AboutRapWars from "./routes/components/About Pages/About RapWars/AboutRapWars";
import AboutPP from "./routes/components/About Pages/About PP/AboutPP";
import AboutSS from "./routes/components/About Pages/About SS/AboutSS";
import Contact from "./routes/components/About Pages/Contact";
import ShowPaymentPage from "./routes/components/PaymentPage/PaymentPage";
import { useAuth } from "./routes/components/AuthProvider.jsx";
function ProtectedRoute({ element}) {
  const { isLoggedIn } = useAuth()
  return isLoggedIn ? element : <Navigate to="/" />;
}

function App() {
  const location = useLocation();

  return (
    <GoogleOAuthProvider clientId="735998356236-apic0eqqi6hedhjbps0ba2m1ob9oigke.apps.googleusercontent.com">
      <AuthProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/RapWars/form" element={<ProtectedRoute element={<RapWarsForm />} />} />
            <Route path="/PurpleProse/form" element={<ProtectedRoute element={<PurpleProseForm />} />} />
            <Route path="/StandupSoapbox/form" element={<ProtectedRoute element={<StandupSoapboxForm />} />} />
            <Route path="/PurpleProse/About" element={<AboutPP />} />
            <Route path="/RapWars/About" element={<AboutRapWars />} />
            <Route path="/StandupSoapbox/About" element={<AboutSS />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/payment-page" element={<ShowPaymentPage />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;


