import PlayPage from "./pages/playPage.tsx";
import ContactPage from "./pages/contactPage.tsx";
import DocumentsPage from "./pages/documentsPage.tsx";
import StakePage from "./pages/StakePage.tsx";
import NoPage from "./pages/NoPage.tsx";
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlayPage />,
    errorElement: <NoPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/documents",
    element: <DocumentsPage />,
  },
  {
    path: "/stake",
    element: <StakePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

export default router;
