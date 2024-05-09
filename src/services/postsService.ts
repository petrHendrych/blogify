import { LoaderFunctionArgs } from "react-router-dom";

export const postsService = {
  fetchAllPosts: async ({ request }: LoaderFunctionArgs) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: request.signal,
    });
    const data = await res.json();
    return data.splice(0, 12); // just get first 12 instead all 100 from request
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
      post,
      comments,
      user: await userResponse.json(),
    };
  },
};
