import type { Comment, UUID } from "@/types";
import { useLocalStorage } from "usehooks-ts";
import { StorageKeys } from "@/utils/constants.ts";

export const useComments = (postId: string) => {
  const [comments, setComments, removeComments] = useLocalStorage(
    `${StorageKeys.BLOGIFY_COMMENTS_KEY}-post-${postId}`,
    [] as Comment[],
  );

  const deleteComment = (id: UUID) => {
    const index = comments.findIndex((c) => c.id === id);
    if (index >= 0) {
      const newComments = comments.toSpliced(index, 1);
      if (comments.length > 0) {
        setComments(newComments);
      } else {
        removeComments();
      }
    }
  };

  const addComment = (comment: Comment) => {
    setComments([...comments, comment]);
  };

  return { comments, deleteComment, addComment };
};
