import Thumbnail from "@/assets/images/big-thumbnail.avif";
import styles from "@/assets/stylesheets/_big-thumbnail.module.sass";
import { Button } from "react-bootstrap";

type ThumbnailPostProps = {
  title: string;
  description: string;
};

const ThumbnailPost = ({ title, description }: ThumbnailPostProps) => {
  return (
    <div className="position-relative d-none d-md-block">
      <img src={Thumbnail} alt="thumb" className="rounded-4 w-100" />
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Button variant="warning" className={styles.actionButton}>
          Read more
        </Button>
      </div>
    </div>
  );
};

export default ThumbnailPost;
