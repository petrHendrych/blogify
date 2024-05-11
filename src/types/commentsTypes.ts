export type Comment = {
  id: number | `${string}-${string}-${string}-${string}-${string}`;
  postId: number;
  name?: string;
  email: string;
  body: string;
};

export type StorageComment = {
  commentId?: number | `${string}-${string}-${string}-${string}-${string}`;
} & Comment;
