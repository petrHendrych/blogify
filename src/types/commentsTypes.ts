import type { UUID } from "@/types/commonTypes.ts";

export type Comment = {
  id: number | UUID;
  postId: number;
  name?: string;
  email: string;
  body: string;
};

export type StorageComment = {
  commentId?: number | UUID;
} & Comment;
