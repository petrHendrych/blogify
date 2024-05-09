import { useLoaderData } from "react-router-dom";
import { Post, Comment, User } from "@/types";
import { Container, Figure } from "react-bootstrap";
import styles from "@/assets/stylesheets/_post-detail.module.sass";
import Carbonara from "@/assets/images/carbonara.png";
import PostAuthorDetails from "@/components/PostAuthorDetails.tsx";

const PostDetail = () => {
  const { post, user } = useLoaderData() as {
    post: Post;
    comments: Comment[];
    user: User;
  };

  return (
    <Container className={styles.narrowContainer}>
      <span className="text-muted mb-2 d-block">cooking</span>

      <h1 className="mb-3">
        <strong>{post.title}</strong>
      </h1>

      <p className="fs-5">{post.body}</p>

      <PostAuthorDetails {...user} />

      <Figure>
        <Figure.Image src={Carbonara} alt="Carbonara" />
        <Figure.Caption>Final product of the Carbonara recipe</Figure.Caption>
      </Figure>
    </Container>
  );
};

export default PostDetail;
