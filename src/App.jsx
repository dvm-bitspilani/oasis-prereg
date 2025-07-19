import { GoogleOAuthProvider } from "@react-oauth/google";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AboutPP from "./routes/components/About Pages/About PP/AboutPP";
import AboutRapWars from "./routes/components/About Pages/About RapWars/AboutRapWars";
import AboutScontro from "./routes/components/About Pages/About Scontro/AboutScontro";
import AboutSS from "./routes/components/About Pages/About SS/AboutSS";
import { AuthProvider } from "./routes/components/AuthProvider.jsx";
import PurpleProseForm from "./routes/components/Form/PurpleProseForm.jsx";
import RapWarsForm from "./routes/components/Form/RapWarsForm.jsx";
import ScontroForm from "./routes/components/Form/ScontroForm.jsx";
import StandupSoapboxForm from "./routes/components/Form/StandupSoapboxForm.jsx";
import HomePage from "./routes/components/HomePage/HomePage.jsx";
import LandingPage from "./routes/components/LandingPage/LandingPage.jsx";
import ProfilePage from "./routes/components/ProfilePage/ProfilePage.jsx";
// import Contact from "./routes/components/About Pages/Contact";
// import AboutChoreo from "./routes/components/About Pages/About Choreo/AboutChoreo.jsx";
// import AboutDesertDuel from "./routes/components/About Pages/About DesertDuel/AboutDesertDuel.jsx";
// import AboutFashP from "./routes/components/About Pages/About FashP/AboutFashP.jsx";
// import AboutPitchPerfect from "./routes/components/About Pages/About PitchPerfect/AboutPitchPerfect.jsx";
// import AboutRazzmatazz from "./routes/components/About Pages/About Razzmatazz/AboutRazzmatazz.jsx";
// import AboutStagePlay from "./routes/components/About Pages/About StagePlay/AboutStagePlay.jsx";
// import AboutStreetDance from "./routes/components/About Pages/About StreetDance/AboutStreetDance.jsx";
// import AboutStreetPlay from "./routes/components/About Pages/About StreetPlay/AboutStreetPlay.jsx";
// import AboutTarang from "./routes/components/About Pages/About Tarang/AboutTarang.jsx";
import { useAuth } from "./routes/components/AuthProvider.jsx";
// import ChoreoForm from "./routes/components/Form/ChoreForm.jsx";
// import DesertDuelForm from "./routes/components/Form/DesertDuelForm.jsx";
// import FashPForm from "./routes/components/Form/FashPForm.jsx";
// import PitchPerfectForm from "./routes/components/Form/PitchPerfectForm.jsx";
// import RazzmatazzForm from "./routes/components/Form/RazzmatazzForm.jsx";
// import StagePlayForm from "./routes/components/Form/StagePlayForm.jsx";
// import StreetDanceForm from "./routes/components/Form/StreetDanceForm.jsx";
// import StreetPlayForm from "./routes/components/Form/StreetPlayForm.jsx";
// import TarangForm from "./routes/components/Form/TarangForm.jsx";
import ShowPaymentPage from "./routes/components/PaymentPage/PaymentPage";

function ProtectedRoute({ element }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/" />;
}

function App() {
  const location = useLocation();

  return (
    <GoogleOAuthProvider clientId="1075258287649-u7ip9v5r5bcics2mf8p53dkblgcc9r4f.apps.googleusercontent.com">
      <AuthProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/home"
              element={<ProtectedRoute element={<HomePage />} />}
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/RapWars/form"
              element={<ProtectedRoute element={<RapWarsForm />} />}
            />
            <Route
              path="/PurpleProse/form"
              element={<ProtectedRoute element={<PurpleProseForm />} />}
            />
            <Route
              path="/StandupSoapbox/form"
              element={<ProtectedRoute element={<StandupSoapboxForm />} />}
            />
            <Route
              path="/Scontro/form"
              element={<ProtectedRoute element={<ScontroForm />} />}
            />
            {/* <Route
              path="/Razzmatazz/form"
              element={<ProtectedRoute element={<RazzmatazzForm />} />}
            />
            <Route
              path="/Choreo/form"
              element={<ProtectedRoute element={<ChoreoForm />} />}
            />
            <Route
              path="/FashP/form"
              element={<ProtectedRoute element={<FashPForm />} />}
            />
            <Route
              path="/PitchPerfect/form"
              element={<ProtectedRoute element={<PitchPerfectForm />} />}
            />
            <Route
              path="/StreetDance/form"
              element={<ProtectedRoute element={<StreetDanceForm />} />}
            />
            <Route
              path="/Tarang/form"
              element={<ProtectedRoute element={<TarangForm />} />}
            />
            <Route
              path="/StreetPlay/form"
              element={<ProtectedRoute element={<StreetPlayForm />} />}
            />
            <Route
              path="/StagePlay/form"
              element={<ProtectedRoute element={<StagePlayForm />} />}
            />
            <Route
              path="/DesertDuel/form"
              element={<ProtectedRoute element={<DesertDuelForm />} />}
            /> */}

            <Route path="/PurpleProse/About" element={<AboutPP />} />
            <Route path="/Scontro/About" element={<AboutScontro />} />
            <Route path="/RapWars/About" element={<AboutRapWars />} />
            <Route path="/StandupSoapbox/About" element={<AboutSS />} />
            {/* <Route path="/Razzmatazz/About" element={<AboutRazzmatazz />} />
            <Route path="/Choreo/About" element={<AboutChoreo />} />
            <Route path="/FashP/About" element={<AboutFashP />} />
            <Route path="/PitchPerfect/About" element={<AboutPitchPerfect />} />
            <Route path="/StagePlay/About" element={<AboutStagePlay />} />
            <Route path="/StreetDance/About" element={<AboutStreetDance />} />
            <Route path="/StreetPlay/About" element={<AboutStreetPlay />} />
            <Route path="/Tarang/About" element={<AboutTarang />} />
            <Route path="/DesertDuel/About" element={<AboutDesertDuel />} /> */}

            {/* <Route path="/Contact" element={<Contact />} /> */}
            <Route path="/payment-page" element={<ShowPaymentPage />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
