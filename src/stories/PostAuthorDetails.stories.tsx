import type { Meta, StoryObj } from "@storybook/react";
import PostAuthorDetails from "@/components/PostAuthorDetails.tsx";
import type { User } from "@/types";

const user = {
  name: "John Doe",
  username: "johndoe",
};

const meta: Meta<typeof PostAuthorDetails> = {
  component: PostAuthorDetails,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PostAuthorDetails>;

export const PostAuthorStory: Story = {
  args: {
    user: user as User,
    minutesRead: 5,
    date: new Date(),
  },
};
