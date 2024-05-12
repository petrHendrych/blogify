import type { UUID } from "@/types/commonTypes.ts";

export type Comment = {
  id: number | UUID;
  postId: number;
  name?: string;
  email: string;
  body: string;
  children?: Comment[];
};
