import ThumbnailPost from "@/components/ThumbnailPost.tsx";
import Thumbnail from "@/assets/images/big-thumbnail.avif";
import PostCard from "@/components/PostCard.tsx";
import { useLoaderData } from "react-router-dom";
import { Post } from "@/types";
import styles from "@/assets/stylesheets/_post.module.sass";
import { useTranslation } from "react-i18next";

const title = "IMPRESS YOUR FRIENDS WITH THE BEST CARBONARA";
const description =
  "Fruitcake gingerbread sesame snaps pastry donut. Cake candy jelly-o oat cake bonbon icing lemon drops apple pie. Carrot cake cupcake cookie soufflé cookie soufflé.";

function Homepage() {
  const { t } = useTranslation();
  const posts = useLoaderData() as Post[];

  return (
    <>
      <ThumbnailPost
        title={title}
        description={description}
        thumbnail={Thumbnail}
      />
      <h3 className="d-none d-md-block mt-5 text-center text-uppercase">
        {t("latestPosts")}
      </h3>
      <div className={styles.postContainer}>
        {posts.map((post) => (
          <PostCard {...post} key={post.id} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
