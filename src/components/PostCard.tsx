import { Button, Card } from "react-bootstrap";
import thumbnail from "../assets/images/thumbnail.jpg";
import styles from "../assets/stylesheets/_post.module.sass";
import { Post } from "@/types";

const PostCard = ({ title, body }: Post) => {
  return (
    <Card className={styles.postCard}>
      <Card.Img variant="top" src={thumbnail} alt={title} title={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary">Read article</Button>
      </Card.Body>
    </Card>
  );
};

export default PostCard;
