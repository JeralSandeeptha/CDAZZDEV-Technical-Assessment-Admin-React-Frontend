import { EnrollmentsListComponentprops } from '../../types/component.types';
import './EnrollmentList.scss';
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
import Enrollment from '../enrollment/Enrollment';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const EnrollmentList = (props: EnrollmentsListComponentprops) => {

  return (
    <div className="students-list">
      <div className="students-list-inner">
        <Link to='/add-enrollment'>
          <Button style={{marginBottom: '20px'}} data-testid='add-btn' type="submit" variant="contained" size="small" className='control-button'>Enroll Students For Courses</Button>
        </Link>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Enrollment ID</StyledTableCell>
                <StyledTableCell align="center">Student Name</StyledTableCell>
                <StyledTableCell align="center">Course Name</StyledTableCell>
                <StyledTableCell align="center">Instructor</StyledTableCell>
                <StyledTableCell align="center">Enrollment Date</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              {props.enrollments.map((enrollment) => (
                <Enrollment 
                  isError={props.isError}
                  isLoading={props.isLoading}
                  isSuccess={props.isSuccess}
                  setIsError={props.setIsError}
                  setIsSuccess={props.setIsSuccess}
                  setIsLoading={props.setIsLoading}
                  enrollment={enrollment}
                  getEnrollments={props.getEnrollments}
                  setEnrollments={props.setEnrollments}
                  key={enrollment.id}
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
                    Enrollment Removed Successfully
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

export default EnrollmentList;
