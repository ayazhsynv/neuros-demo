import { createBrowserRouter, Link } from "react-router-dom";
import UiLayout from "./components/layout";
import UiHome from "./pages/home";
import UiBlog from "./pages/blog";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <UiLayout />,
    children: [
      {
        path: "/",
        element: <UiHome />,
      },
      {
        path: "/blog",
        element: <UiBlog />,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex flex-col items-center justify-center h-screen text-ui-orange font-extrabold">
        <h1 className="text-9xl mb-10">Oops!</h1>
        <h2 className="text-2xl mb-3">
          Sorry, the page you are looking for was not found
        </h2>
        <Link to={"/"}>
          <button className="mt-10 px-4 py-2 bg-ui-gray-light text-ui-black rounded-lg hover:bg-ui-orange transition duration-300">
            Go to Home
          </button>
        </Link>
      </div>
    ),
  },
]);
