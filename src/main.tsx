import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error!</div>,
    children: [
      { index: true, element: <div>index</div> },
      { path: "test1", element: <div>test1</div> },
      { path: "test2", element: <div>test2</div> },
      { path: "test3", element: <div>test3</div> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
