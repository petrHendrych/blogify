import { type FunctionComponent, useMemo } from "react";
import type { FormikHelpers } from "formik";
import * as formik from "formik";
import type { InferType } from "yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";
import type { Comment, UUID } from "@/types";
import { useComments } from "@/hooks/useComments.ts";

type ReplyCommentFormProps = {
  onCancel: () => void;
  postId: string;
  parentCommentId: UUID;
};

const ReplyCommentForm: FunctionComponent<ReplyCommentFormProps> = ({
  onCancel,
  postId,
  parentCommentId,
}) => {
  const { Formik } = formik;
  const { t } = useTranslation();
  const { addReply } = useComments(postId!);

  const schema = useMemo(
    () =>
      yup.object().shape({
        email: yup
          .string()
          .email(t("formErrors.invalidEmailForm"))
          .required(t("formErrors.required")),
        body: yup.string().required(t("formErrors.required")),
      }),
    [t],
  );

  const handleSubmit = (
    values: InferType<typeof schema>,
    { resetForm }: FormikHelpers<InferType<typeof schema>>,
  ) => {
    const comment: Comment = {
      ...values,
      postId: Number(postId),
      name: "",
      id: crypto.randomUUID(),
      parentCommentId,
      children: [],
    };
    addReply(comment, parentCommentId);
    resetForm();
    onCancel();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        body: "",
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group controlId="validationEmail" className="mb-1 mt-2">
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">
                {t("email")}
              </InputGroup.Text>
              <Form.Control
                required
                size="sm"
                type="email"
                name="email"
                placeholder="name@example.com"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-2" controlId="validationComment">
            <Form.Control
              as="textarea"
              name="body"
              size="sm"
              placeholder={t("leaveComment")}
              style={{ height: "100px" }}
              required
              value={values.body}
              onChange={handleChange}
              isValid={touched.body && !errors.body}
              isInvalid={!!errors.body}
            />
            <Form.Control.Feedback type="invalid">
              {errors.body}
            </Form.Control.Feedback>
          </Form.Group>
          <Stack direction="horizontal" gap={2}>
            <Button type="submit" size="sm">
              {t("reply")}
            </Button>
            <Button
              type="button"
              onClick={onCancel}
              size="sm"
              variant="secondary"
            >
              {t("cancel")}
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default ReplyCommentForm;
