import { Button, Card } from "react-bootstrap";
import styles from "../assets/stylesheets/_post.module.sass";
import { Post } from "@/types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PostCard = ({ title, body, id, thumbnail, category }: Post) => {
  const { t } = useTranslation();

  return (
    <Card as={Link} to={`/posts/${id}`} className={styles.postCard}>
      <Card.Img variant="top" src={thumbnail} alt={title} title={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Card.Text className="text-muted">{category}</Card.Text>
        <Button variant="outline-primary">{t("readFullArticle")}</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
