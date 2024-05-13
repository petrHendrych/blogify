import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Home from "./pages/Home.tsx";
import PostDetail from "./pages/PostDetail.tsx";
import { postsService } from "@/services";
import DetailLayout from "@/layouts/DetailLayout.tsx";
import Subpage from "@/pages/Subpage.tsx";
import i18n from "@/locales/i18n.ts";

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
        element: <Home />,
        loader: postsService.fetchAllPosts,
      },
      {
        path: "/cooking",
        element: <Subpage title={i18n.t("cookingTitle")} />,
        loader: async (args) => {
          return postsService.fetchByCategory(args, "cooking");
        },
      },
      {
        path: "/IT",
        element: <Subpage title={i18n.t("ITTitle")} />,
        loader: async (args) => {
          return postsService.fetchByCategory(args, "IT");
        },
      },
      {
        path: "/gardening",
        element: <Subpage title={i18n.t("gardeningTitle")} />,
        loader: async (args) => {
          return postsService.fetchByCategory(args, "gardening");
        },
      },
    ],
  },
]);
