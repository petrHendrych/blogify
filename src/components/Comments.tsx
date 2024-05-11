import { useParams } from "react-router-dom";
import type { Comment } from "@/types";
import { Button, Image, Modal, Stack } from "react-bootstrap";
import avatar from "@/assets/images/avatar.jpg";
import NewCommentForm from "@/components/NewCommentForm.tsx";
import { useTranslation } from "react-i18next";
import { useComments } from "@/hooks/useComments.ts";
import { Trash } from "react-bootstrap-icons";
import styles from "@/assets/stylesheets/_comments.module.sass";
import { useState } from "react";

const Comments = () => {
  const { t } = useTranslation();
  const { postId } = useParams<{ postId: string }>();
  const { mergedComments } = useComments(postId!);

  return (
    <>
      <h2 className="fs-3 mb-4">Comments</h2>

      <Stack gap={3} className="mb-4">
        {mergedComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </Stack>

      <h5>{t("newComment")}</h5>
      <NewCommentForm postId={Number(postId ?? 0)} />
    </>
  );
};

export default Comments;

const Comment = ({ body, email, id }: Comment) => {
  const { postId } = useParams<{ postId: string }>();
  const { deleteComment } = useComments(postId!);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  const handleDelete = () => {
    if (typeof id !== "number") {
      deleteComment(id);
    }
  };

  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <Image
          src={avatar}
          alt="avatar"
          height={50}
          width={50}
          roundedCircle
          className="align-self-start"
        />
        <Stack className="-mt-2">
          <div className="d-flex justify-content-between">
            <strong>{email}</strong>
            {typeof id !== "number" && (
              <Button
                size="sm"
                variant="link"
                className={styles.deleteIconButton}
                title="Delete"
                onClick={() => setShow(true)}
              >
                <Trash color="#ff0000" />
              </Button>
            )}
          </div>
          <div>{body}</div>
          <Button variant="link" className={styles.replyButton}>
            {t("reply")}
          </Button>
        </Stack>
      </Stack>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t("areYouSure")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t("deleteCommentInfo")}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            {t("close")}
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            {t("deleteComment")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
