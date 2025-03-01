import { useFormik } from "formik";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/page-header/PageHeader";
import "./AddStudentPage.scss";
import { IUser } from "../../types/interfaces.types";
import * as Yup from "yup";
import useAuthContext from "../../hooks/useAuthContext";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import registerStudent from "../../services/student-service/registerStudent/registerStudent";

const AddStudentPage = () => {
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const yupValidationSchema = Yup.object({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    mobile: Yup.string().required("Mobile is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(3, "Password must be at least 3 characters")
      .required("Password is required"),
  });

  const handleLogin = (values: IUser) => {
    console.log(values);
    registerStudent({
      navigate: navigate,
      setIsError: setIsError,
      setIsLoading: setIsLoading,
      setIsSuccess: setIsSuccess,
      user: values,
      token: token
    });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
      mobile: "",
      address: "",
    },
    validationSchema: yupValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleLogin(values);
      formik.resetForm();
    },
  });

  return (
    <>
      <Navbar />

      <PageHeader
        description="Fill the below form to register a new student"
        title="Register Student"
      />

      {isError && (
        <Alert
          className="alert-message"
          icon={<CheckIcon fontSize="inherit" />}
          severity="error"
        >
          Please try again later
        </Alert>
      )}

      {isSuccess && (
        <Alert
          className="alert-message"
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
        >
          Account has been created
        </Alert>
      )}

      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="form-container">
        <div className="form-container-inner">
          <form onSubmit={formik.handleSubmit} className="form">
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.email && formik.errors.email}
                </h6>
              </div>
              <TextField
                label="Email Address"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.fname && formik.errors.fname}
                </h6>
              </div>
              <TextField
                label="First Name"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="fname"
                type="fname"
                value={formik.values.fname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.lname && formik.errors.lname}
                </h6>
              </div>
              <TextField
                label="Last Name"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="lname"
                type="lname"
                value={formik.values.lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="asd">
              <div className="text-input-container">
                <div className="error">
                  <h6 className="error-texts">
                    {formik.touched.address && formik.errors.address}
                  </h6>
                </div>
                <TextField
                  label="Address"
                  id="outlined-size-small"
                  size="small"
                  className="text-field"
                  name="address"
                  type="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="text-input-container">
                <div className="error">
                  <h6 className="error-texts">
                    {formik.touched.mobile && formik.errors.mobile}
                  </h6>
                </div>
                <TextField
                  label="Mobile"
                  id="outlined-size-small"
                  size="small"
                  className="text-field"
                  name="mobile"
                  type="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.password && formik.errors.password}
                </h6>
              </div>
              <TextField
                label="Password"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <h6 className="instruction-text">Create a default password to the student</h6>
            <h6 className="instruction-text">Must be at least 3 characters</h6>
            <Button
              variant="contained"
              size="small"
              className="control-button"
              type="submit"
            >
              Create account
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudentPage;
