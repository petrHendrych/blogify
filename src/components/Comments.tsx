import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { commentsService } from "@/services/commentsService.ts";
import type { Comment } from "@/types";
import { Button, Image, Stack } from "react-bootstrap";
import avatar from "@/assets/images/avatar.jpg";

const Comments = () => {
  const { postId } = useParams<{ postId: string }>();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (postId) {
      commentsService.fetchPostComments(postId).then((res) => {
        setComments(res);
      });
    }
  }, [postId]);

  return (
    <>
      <h2 className="fs-3 mb-4">Comments</h2>

      <Stack gap={3}>
        {comments?.map((comment) => <Comment key={comment.id} {...comment} />)}
      </Stack>
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
