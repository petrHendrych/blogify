import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Homepage from "./pages/Homepage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: async ({ request }) => {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              signal: request.signal,
            },
          );
          const data = await res.json();
          return data.splice(0, 12); // just get first 12 instead all 100 from request
        },
      },
    ],
  },
]);
