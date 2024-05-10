import { categories } from "@/data";

type Category = (typeof categories)[number];

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  thumbnail: string;
  category: Category;
};
