import { useEffect, useMemo, useState } from "react";
import type { Comment, StorageComment, UUID } from "@/types";
import { useLocalStorage } from "usehooks-ts";
import { StorageKeys } from "@/utils/constants.ts";
import { commentsService } from "@/services/commentsService.ts";

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [storageComments, setStorageComments, removeStorageComments] =
    useLocalStorage(
      `${StorageKeys.BLOGIFY_COMMENTS_KEY}-post-${postId}`,
      [] as StorageComment[],
    );

  useEffect(() => {
    if (postId) {
      commentsService.fetchPostComments(postId).then((res) => {
        setComments(res);
      });
    }
  }, [postId]);

  const mergedComments = useMemo(() => {
    return [...comments, ...storageComments];
  }, [comments, storageComments]);

  const deleteComment = (id: UUID) => {
    const index = storageComments.findIndex((c) => c.id === id);
    if (index >= 0) {
      const comments = storageComments.toSpliced(index, 1);
      if (comments.length > 0) {
        setStorageComments(comments);
      } else {
        removeStorageComments();
      }
    }
  };

  return { mergedComments, deleteComment };
};
