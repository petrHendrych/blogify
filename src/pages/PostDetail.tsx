import { useLoaderData } from "react-router-dom";
import type { Comment, Post, User } from "@/types";
import { Container, Figure } from "react-bootstrap";
import styles from "@/assets/stylesheets/_post-detail.module.sass";
import Carbonara from "@/assets/images/carbonara.png";
import PostAuthorDetails from "@/components/PostAuthorDetails.tsx";
import { generatePost } from "@/data";
import { useMemo } from "react";
import PostRenderer from "@/components/PostRenderer.tsx";
import { useTranslation } from "react-i18next";
import Comments from "@/components/Comments.tsx";

const PostDetail = () => {
  const { post, user } = useLoaderData() as {
    post: Post;
    comments: Comment[];
    user: User;
  };

  const { t } = useTranslation();
  const postContent = useMemo(() => generatePost(), []);

  return (
    <Container className={styles.narrowContainer}>
      <span className="text-muted mb-2 d-block">{post.category}</span>

      <h1 className="mb-3">
        <strong>{post.title}</strong>
      </h1>

      <p className="fs-5">{post.body}</p>

      <PostAuthorDetails user={user} date={new Date()} minutesRead={5} />

      <Figure>
        <Figure.Image
          src={Carbonara}
          alt="Carbonara"
          className={styles.postImage}
        />
        <Figure.Caption>{t("figureCaption")}</Figure.Caption>
      </Figure>

      {postContent.map((post, i) => PostRenderer(post, i))}

      <div className={styles.divider} />

      <Comments />
    </Container>
  );
};

export default PostDetail;
