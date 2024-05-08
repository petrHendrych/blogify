import { useLoaderData } from "react-router-dom";
import { Post, Comment } from "@/types";

const PostDetail = () => {
  const data = useLoaderData() as { post: Post; comments: Comment[] };

  return (
    <div>
      <h1>{data.post.title}</h1>
      <p>{data.post.body}</p>
    </div>
  );
};

export default PostDetail;
