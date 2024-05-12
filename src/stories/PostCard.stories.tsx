import type { Meta, StoryObj } from "@storybook/react";
import CardThumbnail from "@/assets/images/blog_placeholder.jpg";

import PostCard from "@/components/PostCard.tsx";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof PostCard> = {
  component: PostCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const PostCardStory: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <div style={{ width: "300px" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  args: {
    id: 1,
    category: "cooking",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    title:
      "Sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    thumbnail: CardThumbnail,
    userId: 1,
  },
};
