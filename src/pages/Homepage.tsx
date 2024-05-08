import Thumbnail from "../assets/images/big-thumbnail.avif";
import styles from "@/assets/stylesheets/pages/homepage/_big-thumbnail.module.sass";
import { Button } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <div className="position-relative">
        <img src={Thumbnail} alt="thumb" className="rounded-4 w-100" />
        <div className={styles.container}>
          <h1 className={styles.title}>
            IMPRESS YOUR FRIENDS WITH THE BEST CARBONARA
          </h1>
          <p className={styles.paragraph}>
            Fruitcake gingerbread sesame snaps pastry donut. Cake candy jelly-o
            oat cake bonbon icing lemon drops apple pie. Carrot cake cupcake
            cookie soufflé cookie soufflé.{" "}
          </p>
          <Button className={styles.actionButton}>Read more</Button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
