import type { FormikHelpers } from "formik";
import * as formik from "formik";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import type { InferType } from "yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { type FunctionComponent, useMemo } from "react";
import type { Comment } from "@/types";
import { useComments } from "@/hooks/useComments.ts";

type NewCommentFormProps = {
  postId: string;
};

const NewCommentForm: FunctionComponent<NewCommentFormProps> = ({ postId }) => {
  const { t } = useTranslation();
  const { Formik } = formik;
  const { addComment } = useComments(postId);

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
      parentCommentId: null,
    };
    addComment(comment);
    resetForm();
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
          <Form.Group controlId="validationEmail">
            <FloatingLabel
              controlId="floatingInputEmail"
              label={t("email")}
              className="mb-3"
            >
              <Form.Control
                required
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
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationComment">
            <FloatingLabel
              controlId="floatingInputBody"
              label={t("leaveComment")}
            >
              <Form.Control
                as="textarea"
                name="body"
                placeholder={t("leaveComment")}
                style={{ height: "200px" }}
                required
                value={values.body}
                onChange={handleChange}
                isValid={touched.body && !errors.body}
                isInvalid={!!errors.body}
              />
              <Form.Control.Feedback type="invalid">
                {errors.body}
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Button type="submit">{t("addComment")}</Button>
        </Form>
      )}
    </Formik>
  );
};

export default NewCommentForm;
