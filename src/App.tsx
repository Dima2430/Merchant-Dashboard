import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ConnectToShopifySuccessful from "./pages/ConnectToShopifySuccessful";
import OnboardingComplete from "./pages/OnboardingComplete";
import ConnectToGoogle from "./pages/ConnectToGoogle";
import ConnectToShopify from "./pages/ConnectToShopify";
import WelcomeToChad from "./pages/WelcomeToChad";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-complete":
        title = "";
        metaDescription = "";
        break;
      case "/connect-to-google":
        title = "";
        metaDescription = "";
        break;
      case "/connect-to-shopify":
        title = "";
        metaDescription = "";
        break;
      case "/welcome-to-chad":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ConnectToShopifySuccessful />} />
      <Route path="/onboarding-complete" element={<OnboardingComplete />} />
      <Route path="/connect-to-google" element={<ConnectToGoogle />} />
      <Route path="/connect-to-shopify" element={<ConnectToShopify />} />
      <Route path="/welcome-to-chad" element={<WelcomeToChad />} />
    </Routes>
  );
}
export default App;
