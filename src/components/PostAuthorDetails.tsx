import { Image, Stack } from "react-bootstrap";
import { FunctionComponent } from "react";
import { User } from "@/types";
import AvatarImage from "@/assets/images/avatar.jpg";

const PostAuthorDetails: FunctionComponent<User> = (user) => {
  return (
    <Stack direction="horizontal" gap={3} className="mb-4">
      <div>
        <Image
          src={AvatarImage}
          width={50}
          height={50}
          alt={`${user.username}-photo`}
          roundedCircle
          className="border"
        />
      </div>
      <Stack>
        <div>{user.name}</div>
        <Stack direction="horizontal" className="text-muted small" gap={1}>
          <span>{new Date().toLocaleDateString()}</span>
          <span>• 5 min read</span>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostAuthorDetails;
