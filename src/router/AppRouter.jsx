import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Details, Galery, Home } from "../pages";
import { ROUTES } from "../const/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
  {
    path: ROUTES.galery,
    element: <Galery />,
  },
  {
    path: ROUTES.details,
    element: <Details />,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
