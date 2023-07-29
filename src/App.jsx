import "./App.css";
import { Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./routes/components/LandingPage/LandingPage.jsx";
import HomePage from "./routes/components/HomePage/HomePage.jsx";
import ProfilePage from "./routes/components/ProfilePage/ProfilePage.jsx";
import Form from "./routes/components/Form/Form.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AboutRapWars from "./routes/components/About Pages/About RapWars/AbouRapWars";
import AboutPP from "./routes/components/About Pages/About PP/AboutPP";
import AboutSS from "./routes/components/About Pages/About SS/AboutSS";
import bgImage from "./assets/rectangle2.png";

function App() {
  const location = useLocation();
  return (
    <GoogleOAuthProvider clientId="735998356236-apic0eqqi6hedhjbps0ba2m1ob9oigke.apps.googleusercontent.com">
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/PurpleProse/About" element={<AboutPP />}></Route>
          <Route path="/RapWars/About" element={<AboutRapWars />}></Route>
          <Route path="/StandupSoapbox/About" element={<AboutSS />}></Route>
        </Routes>
        </AnimatePresence>
    </GoogleOAuthProvider>
  );
}

export default App;
