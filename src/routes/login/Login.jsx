import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginSchema } from "../../utill/validationSchema";

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

import cover from "../../assets/imgs/adminLock.png";
import imgLogin from "../../assets/imgs/login.png";
import {
  loginWrapperStyle,
  loginContainerStyle,
  loginPaperStyle,
  loginImageStyle,
  loginFormStyle,
  submitButtonStyle,
} from "./LoginStyle";

export const Login = () => {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.register.users);
  const location = useLocation();
  const redirectPath = location.state?.path || "../profile";
  const validationSubmit = (emailInput, passwordInput, formikHelper) => {
    userName.map((el) => {
      if (el.password === passwordInput && el.email === emailInput) {
        toast.success("Login success");
        navigate(redirectPath, { replace: true });
      } else {
        toast.error("email or password is wrong");
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

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={loginWrapperStyle(cover)}>
      <Box sx={loginContainerStyle}>
        <Paper elevation={6} sx={loginPaperStyle}>
          <Box
            component="img"
            src={imgLogin}
            alt="login"
            sx={loginImageStyle}
          />

          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={loginFormStyle}
          >
            <Typography
              variant="h5"
              textAlign="center"
              mb={2}
              fontWeight="bold"
            >
              Login
            </Typography>

            <TextField
              fullWidth
              margin="normal"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              value={formik.values.email}
              onChange={emailHandler}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              margin="normal"
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
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

            <Box textAlign="center" mt={3}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                size="large"
                sx={submitButtonStyle}
              >
                Submit
              </Button>
            </Box>

            <Box textAlign="center" mt={2}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="outlined" fullWidth size="large">
                  Register
                </Button>
              </Link>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};
