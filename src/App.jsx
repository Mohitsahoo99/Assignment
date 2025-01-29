import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <SideBar />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
