import "./App.css";
import { useRoutes } from "react-router-dom";
import LandingPage from "./routes/components/LandingPage/LandingPage.jsx";
import HomePage from "./routes/components/HomePage/HomePage.jsx";
import ProfilePage from "./routes/components/ProfilePage/ProfilePage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
