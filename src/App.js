import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WebMain from "./pages/WebMain";
import WebDetail from "./pages/WebDetail";
import WebGridview from "./pages/WebGridview";
import WebListview from "./pages/WebListview";
import WebCart from "./pages/WebCart";

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
      case "/webdetail":
        title = "";
        metaDescription = "";
        break;
      case "/webgridview":
        title = "";
        metaDescription = "";
        break;
      case "/weblistview":
        title = "";
        metaDescription = "";
        break;
      case "/webcart":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WebMain />} />
      <Route path="/webdetail" element={<WebDetail />} />
      <Route path="/webgridview" element={<WebGridview />} />
      <Route path="/weblistview" element={<WebListview />} />
      <Route path="/webcart" element={<WebCart />} />
    </Routes>
  );
}
export default App;
