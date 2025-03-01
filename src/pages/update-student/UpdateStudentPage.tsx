import "./UpdateStudentPage.scss";
import { useFormik } from "formik";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/page-header/PageHeader";
import "./UpdateStudentPage.scss";
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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getStudent from "../../services/student-service/getStudent/getStudent";
import updateStudent from "../../services/student-service/updateStudent/updateStudent";

const UpdateStudentPage = () => {
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { studentId } = useParams();
  const [student, setStudent] = useState<IUser>();

  const getSingleStudent = () => {
    getStudent({
      setStudent: setStudent,
      studentId: studentId,
      token: token,
    });
  };

  const handleUpdate = (values: { fname: string, lname: string, mobile: string, address: string }) => {
    updateStudent({
      navigate: navigate,
      studentId: studentId,
      setIsError: setIsError,
      setIsLoading: setIsLoading,
      setIsSuccess: setIsSuccess,
      token: token,
      user: values
    });
  };

  const yupValidationSchema = Yup.object({
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    mobile: Yup.string().required("Mobile is required"),
    address: Yup.string().required("Address is required"),
  });

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      mobile: "",
      address: "",
    },
    validationSchema: yupValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleUpdate(values);
      formik.resetForm();
    },
  });

  useEffect(() => {
    getSingleStudent();
  }, [studentId]);

  useEffect(() => {
    if (student) {
      formik.setValues({
        fname: student.fname || "",
        lname: student.lname || "",
        mobile: student.mobile || "",
        address: student.address || "",
      });
    }
  }, [student]);

  return (
    <>
      <Navbar />

      <PageHeader
        description="Change the below form details to update existing student"
        title="Update Student"
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
          Student updated successful
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
            <Button
              variant="contained"
              size="small"
              className="control-button"
              type="submit"
            >
              Update Student
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateStudentPage;
