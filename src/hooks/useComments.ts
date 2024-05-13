import type { Comment, UUID } from "@/types";
import { useLocalStorage } from "usehooks-ts";
import { StorageKeys } from "@/utils/constants.ts";

export const useComments = (postId: string) => {
  const [comments, setComments] = useLocalStorage(
    `${StorageKeys.BLOGIFY_COMMENTS_KEY}-post-${postId}`,
    [] as Comment[],
  );

  const removeComment = (commentList: Comment[], childToBeRemoved: Comment) => {
    return commentList.filter((comment) => comment.id !== childToBeRemoved.id);
  };

  const handleDeleteComment = (
    prevList: Comment[],
    currentComment: Comment,
  ) => {
    if (currentComment.parentCommentId === null) {
      return removeComment(prevList, currentComment);
    }

    const updatedList: Comment[] = prevList.map((comment) => {
      if (comment.id === currentComment.parentCommentId) {
        return {
          ...comment,
          children: removeComment(comment.children, currentComment),
        };
      }
      return {
        ...comment,
        children: handleDeleteComment(comment.children, currentComment),
      };
    });
    return updatedList;
  };

  const handleAddReply = (
    prevList: Comment[],
    replyComment: Comment,
    parentCommentId: UUID,
  ) => {
    const updatedList: Comment[] = prevList.map((comment) => {
      if (comment.id === parentCommentId) {
        return {
          ...comment,
          children: [...comment.children, replyComment],
        };
      }
      return {
        ...comment,
        children: handleAddReply(
          comment.children,
          replyComment,
          parentCommentId,
        ),
      };
    });
    return updatedList;
  };

  const deleteComment = (comment: Comment) => {
    setComments((prevState) => handleDeleteComment(prevState, comment));
  };

  const addComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  const addReply = (comment: Comment, parentCommentId: UUID) => {
    setComments((prevState) =>
      handleAddReply(prevState, comment, parentCommentId),
    );
  };

  return { comments, deleteComment, addComment, addReply };
};
