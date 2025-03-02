import "./UpdateEnrollment.scss";
import { useFormik } from "formik";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/page-header/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import * as Yup from "yup";
import getStudents from "../../services/student-service/getStudents/getStudents";
import getCourses from "../../services/course-service/getCourses/getCourses";
import { ICourse, IEnrollment, IUser } from "../../types/interfaces.types";
import getEnrollment from "../../services/enrollment-service/getEnrollment/getEnrollment";
import updateEnrollment from "../../services/enrollment-service/updateEnrollment/updateEnrollment";

const UpdateEnrollment = () => {
  const [students, setStudents] = useState<IUser[]>([]);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [enrollment, setEnrollment] = useState<IEnrollment>();
  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { enrollmentId } = useParams();

  const handleUpdateEnrollment = (values: {
    course_id: string;
    student_id: string;
    enrollment_date: Date;
    status: string;
  }) => {
    console.log(values);
    updateEnrollment({
      enrollment: values,
      enrollmentId: enrollmentId,
      navigate: navigate,
      setIsError: setIsError,
      setIsLoading: setIsLoading,
      setIsSuccess: setIsSuccess,
      token: token,
    });
  };

  const yupValidationSchema = Yup.object({
    student_id: Yup.string().required("Student is required"),
    course_id: Yup.string().required("Course is required"),
    enrollment_date: Yup.date().required("Enrollment date is required"),
    status: Yup.string()
      .oneOf(["active"], "Invalid status")
      .required("Status is required"),
  });

  const formik = useFormik({
    initialValues: {
      student_id: "",
      course_id: "",
      status: "active",
      enrollment_date: new Date(),
    },
    validationSchema: yupValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleUpdateEnrollment(values);
      formik.resetForm();
    },
  });

  useEffect(() => {
    getStudents({
      setStudents: setStudents,
      token: token,
    });
    getCourses({
      setCourses: setCourses,
      token: token,
    });
  }, []);

  useEffect(() => {
    getEnrollment({
      enrollmentId: enrollmentId,
      token: token,
      setEnrollment: setEnrollment,
    });
  }, [enrollmentId]);

  useEffect(() => {
    if (enrollment) {
      formik.setValues({
        student_id: enrollment.fname || "",
        course_id: enrollment.title || "",
        status: 'active',
        enrollment_date: new Date()
      });
    }
  }, [enrollment, formik]);

  return (
    <>
      <Navbar />

      <PageHeader
        description="Change the details of the enrollments"
        title="Update Enrollment"
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
          Enrollment Updated Successfully
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
                  {formik.touched.student_id && formik.errors.student_id}
                </h6>
              </div>
              <InputLabel id="student-select-label">Select Student</InputLabel>
              <Select
                labelId="student-select-label"
                value={formik.values.student_id}
                label="Select Student"
                className="text-field"
                onChange={(e) =>
                  formik.setFieldValue("student_id", e.target.value)
                }
              >
                {students.map((student) => {
                  return (
                    <MenuItem value={student.id}>
                      {student.fname} {student.lname}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>

            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.course_id && formik.errors.course_id}
                </h6>
              </div>
              <InputLabel id="course-select-label">Select Course</InputLabel>
              <Select
                labelId="course-select-label"
                value={formik.values.course_id}
                label="Select Course"
                className="text-field"
                onChange={(e) =>
                  formik.setFieldValue("course_id", e.target.value)
                }
              >
                {courses.map((course) => {
                  return (
                    <MenuItem value={course.id}>
                      {course.title} By {course.instructor}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>

            <Button
              variant="contained"
              size="small"
              className="control-button"
              type="submit"
            >
              Enroll Student
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateEnrollment;
