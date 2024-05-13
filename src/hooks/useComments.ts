import type { Comment } from "@/types";
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

  const deleteComment = (comment: Comment) => {
    setComments((prevState) => handleDeleteComment(prevState, comment));
  };

  const addComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return { comments, deleteComment, addComment };
};
