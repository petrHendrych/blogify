import { useParams } from "react-router-dom";
import { Stack } from "react-bootstrap";
import NewCommentForm from "@/components/forms/NewCommentForm.tsx";
import { useTranslation } from "react-i18next";
import { useComments } from "@/hooks/useComments.ts";
import Comment from "@/components/Comment";

const CommentList = () => {
  const { t } = useTranslation();
  const { postId } = useParams<{ postId: string }>();
  const { comments } = useComments(postId!);

  return (
    <>
      <h2 className="fs-3 mb-4">Comments</h2>

      <Stack className="mb-1">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Stack>

      <h5>{t("newComment")}</h5>
      <NewCommentForm postId={postId!} />
    </>
  );
};

export default CommentList;
