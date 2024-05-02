import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Details, Error, Galery, Home } from "../pages";
import { ROUTES } from "../const/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: ROUTES.galery,
    element: <Galery />,
    errorElement: <Error />,
  },
  {
    path: ROUTES.details,
    element: <Details />,
    errorElement: <Error />,
  },
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
