import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Homepage from "./pages/Homepage.tsx";
import PostDetail from "./pages/PostDetail.tsx";
import { postsService } from "@/services";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: postsService.fetchAllPosts,
      },
      {
        path: "/posts/:postId",
        element: <PostDetail />,
        loader: postsService.fetchPostById,
      },
    ],
  },
]);
