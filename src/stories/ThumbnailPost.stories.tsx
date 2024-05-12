import ThumbnailPost from "@/components/ThumbnailPost.tsx";
import type { Meta, StoryObj } from "@storybook/react";
import Thumbnail from "@/assets/images/big-thumbnail.avif";
import { MemoryRouter } from "react-router-dom";
import { Container } from "react-bootstrap";

const meta: Meta<typeof ThumbnailPost> = {
  component: ThumbnailPost,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThumbnailPost>;

export const ThumbnailPostStory: Story = {
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Container>
          <Story />
        </Container>
      </MemoryRouter>
    ),
  ],
  args: {
    title: "IMPRESS YOUR FRIENDS WITH THE BEST CARBONARA",
    description:
      "Fruitcake gingerbread sesame snaps pastry donut. Cake candy jelly-o oat cake bonbon icing lemon drops apple pie. Carrot cake cupcake cookie soufflé cookie soufflé.",
    thumbnail: Thumbnail,
  },
};
