import { CourseListComponentprops } from '../../types/component.types';
import './CourseList.scss';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Alert, Backdrop, Button, CircularProgress } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";
import Course from '../course/Course';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const CourseList = (props: CourseListComponentprops) => {
    
  return (
    <div className="students-list">
      <div className="students-list-inner">
        <Link to='/add-course'>
          <Button style={{marginBottom: '20px'}} data-testid='add-btn' type="submit" variant="contained" size="small" className='control-button'>Add New Course</Button>
        </Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Course ID</StyledTableCell>
                <StyledTableCell align="center">Title</StyledTableCell>
                <StyledTableCell align="center">Instructor</StyledTableCell>
                <StyledTableCell align="center">Start Date</StyledTableCell>
                <StyledTableCell align="center">Joined Date</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {props.courses.map((course) => (
                <Course 
                  course={course}
                  getCourses={props.getCourses}
                  isError={props.isError}
                  isLoading={props.isLoading}
                  isSuccess={props.isSuccess}
                  setCourses={props.setCourses}
                  setIsError={props.setIsError}
                  setIsSuccess={props.setIsSuccess}
                  setIsLoading={props.setIsLoading}
                />
              ))}

              <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={props.isLoading}
              >
                <CircularProgress color="inherit" />
              </Backdrop>

              {
                props.isError && (
                  <Alert className='alert-message' icon={<CheckIcon fontSize="inherit" />} severity="error">
                    Please try again later
                  </Alert>
                )
              }
              
              {
                props.isSuccess && (
                  <Alert className='alert-message' icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Student Deleted Successfully
                  </Alert>
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );

}

export default CourseList;
