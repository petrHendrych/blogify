import { useEffect, useMemo, useState } from "react";
import type { Comment, StorageComment } from "@/types";
import { useLocalStorage } from "usehooks-ts";
import { StorageKeys } from "@/utils/constants.ts";
import { commentsService } from "@/services/commentsService.ts";

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [storageComments] = useLocalStorage(
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

  return { mergedComments };
};
