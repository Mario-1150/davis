import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import PrincipleHome from "./pages/PrincipleHome";
import DocPreview from "./pages/DocPreview";
import GettingStartedUpload from "./pages/GettingStartedUpload";
import DocPreviewChat from "./pages/DocPreviewChat";
import AboutUs from "./pages/AboutUs";

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
      case "/4-doc-preview":
        title = "";
        metaDescription = "";
        break;
      case "/3-getting-startedupload":
        title = "";
        metaDescription = "";
        break;
      case "/5-doc-preview-chat":
        title = "";
        metaDescription = "";
        break;
      case "/2-about-us":
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
      <Route path="/" element={<PrincipleHome />} />
      <Route path="/4-doc-preview" element={<DocPreview />} />
      <Route
        path="/3-getting-startedupload"
        element={<GettingStartedUpload />}
      />
      <Route path="/5-doc-preview-chat" element={<DocPreviewChat />} />
      <Route path="/2-about-us" element={<AboutUs />} />
    </Routes>
  );
}
export default App;
