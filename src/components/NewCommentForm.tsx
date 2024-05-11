import * as formik from "formik";
import { FloatingLabel, Form } from "react-bootstrap";
import * as yup from "yup";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import type { InferType } from "yup";

const NewCommentForm = () => {
  const { t } = useTranslation();
  const { Formik } = formik;

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("formErrors.invalidEmailForm"))
      .required(t("formErrors.required")),
    comment: yup.string().required(t("formErrors.required")),
  });

  const handleSubmit = (values: InferType<typeof schema>) => {
    console.log(values);
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        comment: "",
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
              label={t("newComment")}
            >
              <Form.Control
                as="textarea"
                name="comment"
                placeholder="Leave a comment here"
                style={{ height: "200px" }}
                required
                value={values.comment}
                onChange={handleChange}
                isValid={touched.comment && !errors.comment}
                isInvalid={!!errors.comment}
              />
              <Form.Control.Feedback type="invalid">
                {errors.comment}
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
