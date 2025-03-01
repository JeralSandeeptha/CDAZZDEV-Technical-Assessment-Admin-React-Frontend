import { StudentsListComponentprops } from "../../types/component.types";
import "./StudentsList.scss";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Student from "../student/Student";
import { Alert, Backdrop, CircularProgress } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StudentsList = (props: StudentsListComponentprops) => {
  return (
    <div className="students-list">
      <div className="students-list-inner">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">Student ID</StyledTableCell>
                <StyledTableCell align="center">Student Name</StyledTableCell>
                <StyledTableCell align="center">Email</StyledTableCell>
                <StyledTableCell align="center">Mobile</StyledTableCell>
                <StyledTableCell align="center">Address</StyledTableCell>
                <StyledTableCell align="center">Joined Date</StyledTableCell>
                <StyledTableCell align="center">Edit</StyledTableCell>
                <StyledTableCell align="center">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.students.map((student) => (
                <Student 
                  student={student} 
                  setStudents={props.setStudents} 
                  key={student.id}
                  getStudents={props.getStudents}
                  isLoading={props.isLoading}
                  isError={props.isError}
                  isSuccess={props.isSuccess}
                  setIsError={props.setIsError}
                  setIsLoading={props.setIsLoading}
                  setIsSuccess={props.setIsSuccess}
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
};

export default StudentsList;
