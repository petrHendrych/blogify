import * as formik from "formik";
import { FloatingLabel, Form } from "react-bootstrap";
import * as yup from "yup";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import type { InferType } from "yup";
import { type FunctionComponent, useMemo } from "react";
import type { FormikHelpers } from "formik";
import type { StorageComment } from "@/types";
import { useLocalStorage } from "usehooks-ts";
import { StorageKeys } from "@/utils/constants.ts";

type NewCommentFormProps = {
  postId: number;
};

const NewCommentForm: FunctionComponent<NewCommentFormProps> = ({ postId }) => {
  const { t } = useTranslation();
  const { Formik } = formik;
  const [comments, setComments] = useLocalStorage(
    `${StorageKeys.BLOGIFY_COMMENTS_KEY}-post-${postId}`,
    [] as StorageComment[],
  );

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
    const comment: StorageComment = {
      ...values,
      postId,
      name: "",
      id: crypto.randomUUID(),
      commentId: undefined,
    };
    setComments([...comments, comment]);
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
              controlId="floatingInput"
              label="Email address"
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
              controlId="floatingTextarea2"
              label={t("leaveComment")}
            >
              <Form.Control
                as="textarea"
                name="body"
                placeholder="Leave a comment here"
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
