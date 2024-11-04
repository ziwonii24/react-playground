import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATH } from "./constants/path.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error!</div>,
    children: [
      { index: true, element: <div>index</div> },
      { path: PATH.test1, element: <div>test1</div> },
      { path: PATH.test2, element: <div>test2</div> },
      { path: PATH.test3, element: <div>test3</div> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
