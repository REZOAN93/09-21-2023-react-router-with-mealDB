import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Shop from "../Shop/Shop";
import Home from "../Home/Home";
import About from "../About/About";
import More from "../More/More";
import Category from "../Shop/Category";
import SingleFood from "../Shop/SingleFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Category />,
      },
      {
        path: "/category/:strCategory",
        element: <Shop />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`
          ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path: "/food/:id",
        element: <SingleFood />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
          ),
      },
    ],
  },
]);
