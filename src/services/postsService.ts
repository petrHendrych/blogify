import { LoaderFunctionArgs } from "react-router-dom";
import { categories, getRandom, images } from "@/data";
import { Post } from "@/types";

export const postsService = {
  fetchAllPosts: async ({ request }: LoaderFunctionArgs) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: request.signal,
    });
    const data = await res.json();
    return data.splice(0, 12).map((p: Post) => ({
      ...p,
      thumbnail: getRandom(images),
      category: getRandom(categories),
    })); // just get first 12 instead all 100 from request and add random thumbnail and category
  },

  fetchPostById: async ({ params }: LoaderFunctionArgs) => {
    const [postResponse, commentsResponse] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`,
      ),
    ]);
    const post = await postResponse.json();
    const comments = await commentsResponse.json();
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`,
    );
    return {
      post: { ...post, category: getRandom(categories) },
      comments,
      user: await userResponse.json(),
    };
  },

  fetchByCategory: async (args: LoaderFunctionArgs, category: string) => {
    const posts = (await postsService.fetchAllPosts(args)) as Post[];
    return posts.filter((p) => p.category === category);
  },
};
