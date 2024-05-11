import { useParams } from "react-router-dom";
import type { Comment } from "@/types";
import { Button, Image, Stack } from "react-bootstrap";
import avatar from "@/assets/images/avatar.jpg";
import NewCommentForm from "@/components/NewCommentForm.tsx";
import { useTranslation } from "react-i18next";
import { useComments } from "@/hooks/useComments.ts";

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

const Comment = ({ body, email }: Comment) => {
  return (
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
        <div>
          <strong>{email}</strong>
        </div>
        <div>{body}</div>
        <Button variant="link" className="d-inline-flex">
          Reply
        </Button>
      </Stack>
    </Stack>
  );
};
