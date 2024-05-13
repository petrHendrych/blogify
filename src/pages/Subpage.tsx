import { useLoaderData } from "react-router-dom";
import { Post } from "@/types";
import styles from "@/assets/stylesheets/_post.module.sass";
import PostCard from "@/components/PostCard.tsx";

const Subpage = ({ title }: { title: string }) => {
  const posts = useLoaderData() as Post[];

  return (
    <>
      <h1 className={`${styles.subPageTitle} mb-4 fs-4`}>{title}</h1>
      <div className={styles.postContainer}>
        {posts.map((post) => (
          <PostCard {...post} key={post.id} />
        ))}
      </div>
    </>
  );
};

export default Subpage;
