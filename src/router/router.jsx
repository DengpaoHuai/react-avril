import { createBrowserRouter } from "react-router-dom";
import DemoPage1 from "../pages/DemoPage1";
import DemoPage2 from "../pages/DemoPage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DemoPage1 />,
  },
  {
    path: "/demo-page-2",
    element: <DemoPage2 />,
  },
]);

export default router;
