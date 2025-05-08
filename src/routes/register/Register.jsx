import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../utill/validationSchema.js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/registerSlice";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  registerWrapperStyle,
  registerContainerStyle,
  registerPaperStyle,
  registerImageStyle,
  registerFormStyle,
  submitButtonStyle,
} from "./RegisterStyle.js";
import cover from "../../assets/imgs/adminLock.png";
import imgLogin from "../../assets/imgs/login.png";

export const Register = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.register.users);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConf: "",
    },
    validationSchema: registerSchema,
    validateOnBlur: true,

    onSubmit: (values, formikHelper) => {
      const emails = userName.map((el) => el.email);
      if (emails.find((email) => email.includes(values.email))) {
        formikHelper.setFieldError("email", "email already exist");
        toast.error("email already exist");
      } else {
        dispatch(login(values));
        toast.success("Register success");
        navigate("../login");
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={registerWrapperStyle(cover)}>
      <Box sx={registerContainerStyle}>
        <Paper elevation={6} sx={registerPaperStyle}>
          <Box
            component="img"
            src={imgLogin}
            alt="register"
            sx={registerImageStyle}
          />

          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={registerFormStyle}
          >
            <Typography
              variant="h5"
              textAlign="center"
              mb={2}
              fontWeight="bold"
            >
              Register
            </Typography>

            {/* Name Field */}
            <TextField
              fullWidth
              margin="normal"
              name="name"
              type="text"
              placeholder="Enter Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />

            {/* Email Field */}
            <TextField
              fullWidth
              margin="normal"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              margin="normal"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Confirm Password Field */}
            <TextField
              fullWidth
              margin="normal"
              name="passwordConf"
              type={showPassword ? "text" : "password"}
              placeholder="Re-type Password"
              value={formik.values.passwordConf}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.passwordConf &&
                Boolean(formik.errors.passwordConf)
              }
              helperText={
                formik.touched.passwordConf && formik.errors.passwordConf
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box textAlign="center" mt={3}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                size="large"
                sx={submitButtonStyle}
              >
                Create Account
              </Button>
            </Box>

            <Box textAlign="center" mt={2}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="outlined" fullWidth size="large">
                  Login
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
