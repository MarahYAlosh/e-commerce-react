import { useFormik } from "formik";
import { useSelector } from "react-redux";
import "./Login.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginSchema } from "../../utill/validationSchema";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export const Login = () => {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.register.users);
  const location = useLocation();
  const redirectPath = location.state?.path || "../profile";
  const validationSubmit = (emailInput, passwordInput, formikHelper) => {
    userName.map((el) => {
      if (el.password === passwordInput && el.email === emailInput) {
        navigate(redirectPath, { replace: true });
      } else {
        formikHelper.setFieldError("password", "email or password is wrong");
        formikHelper.setFieldError("password", "email or password is wrong");
      }
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnBlur: true,

    onSubmit: (values, formikHelper) => {
      validationSubmit(values.email, values.password, formikHelper);
    },
  });

  const emailHandler = (e) => {
    formik.handleChange(e);
  };

  return (
    <div>
      <Container style={{ marginTop: "0" }}>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    login
                  </h2>
                  <div className="mb-3">
                    <Form
                      style={{ transform: "scale(1.1)" }}
                      onSubmit={formik.handleSubmit}
                    >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          isInvalid={
                            formik.touched.email && formik.errors.email
                          }
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                          name="email"
                          type="email"
                          placeholder="Enter email"
                          onChange={emailHandler}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          isInvalid={
                            formik.touched.password && formik.errors.password
                          }
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          name="password"
                          type="password"
                          placeholder="Password"
                          onChange={formik.handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <Link to="../register">
                          <Button variant="primary" type="submit">
                            Register
                          </Button>
                        </Link>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
