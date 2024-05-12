import styles from "@/assets/stylesheets/_big-thumbnail.module.sass";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type ThumbnailPostProps = {
  title: string;
  description: string;
  thumbnail: string;
};

const ThumbnailPost = ({
  title,
  description,
  thumbnail,
}: ThumbnailPostProps) => {
  const { t } = useTranslation();

  return (
    <div className="position-relative d-none d-md-block">
      <img src={thumbnail} alt="thumb" className="rounded-4 w-100" />
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <NavLink to="/posts/1">
          <span className="btn btn-warning">{t("readMore")}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ThumbnailPost;
