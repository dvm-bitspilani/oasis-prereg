import "./App.css";
import { useRoutes } from "react-router-dom";
import LandingPage from "./routes/components/LandingPage/LandingPage.jsx";
import HomePage from "./routes/components/HomePage/HomePage.jsx";
import ProfilePage from "./routes/components/ProfilePage/ProfilePage.jsx";
import Form from "./routes/components/Form/Form.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AboutRapWars from "./routes/components/About Pages/About RapWars/AbouRapWars";
import AboutPP from "./routes/components/About Pages/About PP/AboutPP";
import AboutSS from "./routes/components/About Pages/About SS/AboutSS";

function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <><LandingPage /></>,
    },
    {
      path: "/home",
      element : <HomePage />
    },
    {
      path: "/profile",
      element : <ProfilePage />
    },
    {
      path: "/form",
      element : <Form />
    },
    {
      path: "/PurpleProse/About",
      element : <AboutPP />
    },
    {
      path: "/RapWars/About",
      element : <AboutRapWars />
    },
    {
      path: "/StandupSoapbox/About",
      element : <AboutSS />
    },

  ]);
  return (
    <GoogleOAuthProvider clientId="735998356236-apic0eqqi6hedhjbps0ba2m1ob9oigke.apps.googleusercontent.com">
      <div>
        {routes}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
