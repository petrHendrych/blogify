import { PostData } from "@/data";
import { Figure } from "react-bootstrap";
import styles from "@/assets/stylesheets/_post-detail.module.sass";
import { useTranslation } from "react-i18next";

const PostRenderer = (post: PostData, index: number) => {
  const { t } = useTranslation();

  switch (post.type) {
    case "title":
      return (
        <h2 key={index} className="fs-3">
          {post.body}
        </h2>
      );
    case "paragraph":
      return post.body.map((paragraph, i) => (
        <p key={`${index}-paragraph-${i}`} className={styles.postParagraph}>
          {paragraph}
        </p>
      ));
    case "image":
      return (
        <Figure key={index}>
          <Figure.Image
            src={post.body}
            alt="Placeholder image"
            className={styles.postImage}
          />
          <Figure.Caption>{t("figureCaption")}</Figure.Caption>
        </Figure>
      );
  }
};

export default PostRenderer;
