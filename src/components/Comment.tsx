import { useState } from "react";
import { useParams } from "react-router-dom";
import { useComments } from "@/hooks/useComments.ts";
import { useTranslation } from "react-i18next";
import { Button, Image, Modal, Stack } from "react-bootstrap";
import avatar from "@/assets/images/avatar.jpg";
import styles from "@/assets/stylesheets/_comments.module.sass";
import { Trash } from "react-bootstrap-icons";
import ReplyCommentForm from "@/components/forms/ReplyCommentForm.tsx";
import type { Comment } from "@/types";

const Comment = ({ comment }: { comment: Comment }) => {
  const { id, email, body } = comment;
  const { postId } = useParams<{ postId: string }>();
  const { deleteComment } = useComments(postId!);
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <>
      <Stack direction="horizontal" gap={2} className="mb-3">
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
            <Button
              size="sm"
              variant="link"
              className={styles.deleteIconButton}
              title="Delete"
              onClick={() => setShow(true)}
            >
              <Trash color="#ff0000" />
            </Button>
          </div>
          <div>{body}</div>
          {showReplyForm ? (
            <ReplyCommentForm
              onCancel={() => setShowReplyForm(false)}
              postId={postId!}
              parentCommentId={id}
            />
          ) : (
            <Button
              variant="link"
              className={styles.replyButton}
              onClick={() => setShowReplyForm(true)}
            >
              {t("reply")}
            </Button>
          )}
        </Stack>
      </Stack>

      {comment.children.length > 0 &&
        comment.children.map((childComment: Comment) => (
          <div key={childComment.id} style={{ marginLeft: "2rem" }}>
            <Comment comment={childComment} />
          </div>
        ))}

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t("areYouSure")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t("deleteCommentInfo")}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            {t("close")}
          </Button>
          <Button variant="danger" onClick={() => deleteComment(comment)}>
            {t("deleteComment")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Comment;
