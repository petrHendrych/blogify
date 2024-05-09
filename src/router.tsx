import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Homepage from "./pages/Homepage.tsx";
import PostDetail from "./pages/PostDetail.tsx";
import { postsService } from "@/services";
import DetailLayout from "@/layouts/DetailLayout.tsx";

export const router = createBrowserRouter([
  {
    path: "/posts",
    element: <DetailLayout />,
    children: [
      {
        path: ":postId",
        element: <PostDetail />,
        loader: postsService.fetchPostById,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
        loader: postsService.fetchAllPosts,
      },
    ],
  },
]);
