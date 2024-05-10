import { PostData } from "@/data";
import { Figure } from "react-bootstrap";
import styles from "@/assets/stylesheets/_post-detail.module.sass";

const PostRenderer = (post: PostData) => {
  switch (post.type) {
    case "title":
      return <h2 className="fs-3">{post.body}</h2>;
    case "paragraph":
      return post.body.map((paragraph) => (
        <p className={styles.postParagraph}>{paragraph}</p>
      ));
    case "image":
      return (
        <Figure>
          <Figure.Image
            src={post.body}
            alt="Placeholder image"
            className={styles.postImage}
          />
          <Figure.Caption>
            Some random caption that would be passed from BE
          </Figure.Caption>
        </Figure>
      );
  }
};

export default PostRenderer;
