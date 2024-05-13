import type { UUID } from "@/types/commonTypes.ts";

export type Comment = {
  id: UUID;
  postId: number;
  name?: string;
  email: string;
  body: string;
  parentCommentId: UUID | null;
  children: Comment[];
};
