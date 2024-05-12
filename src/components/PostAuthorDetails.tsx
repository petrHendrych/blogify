import { Image, Stack } from "react-bootstrap";
import { FunctionComponent } from "react";
import { User } from "@/types";
import AvatarImage from "@/assets/images/avatar.jpg";
import { useTranslation } from "react-i18next";
import { formatDate } from "@/utils";

type PostAuthorDetailsProps = {
  user: User;
  date: Date;
  minutesRead: number;
};

const PostAuthorDetails: FunctionComponent<PostAuthorDetailsProps> = ({
  user,
  date,
  minutesRead,
}) => {
  const { i18n } = useTranslation();

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
          <span>{formatDate(date, i18n.language)}</span>
          <span>• {minutesRead} min read</span>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PostAuthorDetails;
