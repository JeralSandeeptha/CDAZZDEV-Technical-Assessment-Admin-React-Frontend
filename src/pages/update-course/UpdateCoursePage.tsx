import './UpdateCoursePage.scss';
import { useFormik } from "formik";
import Navbar from "../../components/navbar/Navbar";
import PageHeader from "../../components/page-header/PageHeader";
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
import getCourse from '../../services/course-service/getCourse/getCourse';
import { ICourse } from '../../types/interfaces.types';
import updateCourse from '../../services/course-service/updateCourse/updateCourse';

const UpdateCoursePage = () => {

  const { token } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [course, setCourse] = useState<ICourse>();

  const handleUpdateCourse = (values: { image: string, title: string, description: string, instructor: string, start_date: string, end_date: string }) => {
    console.log(values);
    updateCourse({
      course: values,
      courseId: courseId,
      navigate: navigate,
      setIsError: setIsError,
      setIsLoading: setIsLoading,
      setIsSuccess: setIsSuccess,
      token: token
    });
  }

  const yupValidationSchema = Yup.object({
      image: Yup.string().required("Image is required"),
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      instructor: Yup.string().required("Instructor is required"),
      start_date: Yup.string()
        .required("Start Date is required"),
      end_date: Yup.string()
        .required("End Date is required"),
  });

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      description: "",
      instructor: "",
      start_date: "",
      end_date: "",
    },
    validationSchema: yupValidationSchema,
    onSubmit: async (values) => {
      console.log(values);
      handleUpdateCourse(values);
      formik.resetForm();
    },
  });

  const getSingleCourse = () => {
    getCourse({
      courseId: courseId,
      setCourse: setCourse,
      token: token
    });
  }

  useEffect(() => {
    getSingleCourse();
  }, [courseId]);

  useEffect(() => {
    if (course) {
      formik.setValues({
        image: course.image || "",
        title: course.title || "",
        description: course.description || "",
        instructor: course.instructor || "",
        end_date: course.end_date?.split('T')[0] || "",
        start_date: course.start_date?.split('T')[0] || "",
      });
    }
  }, [course]);

  return (
    <>
      <Navbar />

      <PageHeader
        description="Change the below form details to update existing course"
        title="Update Course"
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
          Course updated successful
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
                  {formik.touched.title && formik.errors.title}
                </h6>
              </div>
              <TextField
                label="Title"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="title"
                type="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.image && formik.errors.image}
                </h6>
              </div>
              <TextField
                label="Course Image"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.description && formik.errors.description}
                </h6>
              </div>
              <TextField
                label="Description"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="description"
                type="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="asd">
              <div className="text-input-container">
                <div className="error">
                  <h6 className="error-texts">
                    {formik.touched.instructor && formik.errors.instructor}
                  </h6>
                </div>
                <TextField
                  label="Instructor"
                  id="outlined-size-small"
                  size="small"
                  className="text-field"
                  name="instructor"
                  type="instructor"
                  value={formik.values.instructor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="text-input-container">
                <div className="error">
                  <h6 className="error-texts">
                    {formik.touched.start_date && formik.errors.start_date}
                  </h6>
                </div>
                <TextField
                  label="Start Date"
                  id="outlined-size-small"
                  size="small"
                  className="text-field"
                  name="start_date"
                  type="start_date"
                  value={formik.values.start_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>
            <div className="text-input-container">
              <div className="error">
                <h6 className="error-texts">
                  {formik.touched.end_date && formik.errors.end_date}
                </h6>
              </div>
              <TextField
                label="End Date"
                id="outlined-size-small"
                size="small"
                className="text-field"
                name="end_date"
                type="end_date"
                value={formik.values.end_date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <Button
              variant="contained"
              size="small"
              className="control-button"
              type="submit"
            >
              Update Course
            </Button>
          </form>
        </div>
      </div>
    </>
  );

}

export default UpdateCoursePage;
