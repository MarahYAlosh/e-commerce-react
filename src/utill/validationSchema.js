import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("enter a valid email address")
    .required("email is required"),
  password: Yup.string().required("password is required"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().min(2, "enter really name").required("name is required"),
  email: Yup.string()
    .email("enter a valid email address")
    .required("email is required"),
  password: Yup.string()
    .min(8, "password should be at least 8")
    .required("password is required"),
  passwordConf: Yup.string()
    .required("retype your password")
    .oneOf([Yup.ref("password")], "your password do not match"),
});
