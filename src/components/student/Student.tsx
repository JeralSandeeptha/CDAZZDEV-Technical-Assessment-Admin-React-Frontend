import { IconButton } from "@mui/material";
import "./Student.scss";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useAuthContext from "../../hooks/useAuthContext";
import deleteStudent from "../../services/student-service/deleteStudent/deleteStudent";
import { StudentComponentprops } from "../../types/component.types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Student = (props: StudentComponentprops) => {

  const {token} = useAuthContext();

  const handleUpdate = (id: number | undefined) => {
    return id;
  }
  
  const handleDelete = (id: number | undefined) => {
    const ifConfirmed = window.confirm('Are you sure want to delete this student?');
    if(ifConfirmed) {
      deleteStudent({
        studentId: id,
        token: token,
        setStudents: props.setStudents,
        getStudents: props.getStudents,
        setIsError: props.setIsError,
        setIsLoading: props.setIsLoading,
        setIsSuccess: props.setIsSuccess
      });
    }
  }

  return (
    <StyledTableRow key={props.student.id}>
      <StyledTableCell align="center">
        {props.student.id}
      </StyledTableCell>
      <StyledTableCell align="center">
        {`${props.student.fname} ${props.student.lname}`}
      </StyledTableCell>
      <StyledTableCell align="center">{props.student.email}</StyledTableCell>
      <StyledTableCell align="center">{props.student.mobile}</StyledTableCell>
      <StyledTableCell align="center">{props.student.address}</StyledTableCell>
      <StyledTableCell align="center">
        {props.student.created_at?.split("T")[0]}
      </StyledTableCell>
      <StyledTableCell align="center">
        <IconButton edge="end" aria-label="edit" onClick={() => handleUpdate(props.student.id)}>
          <EditIcon />
        </IconButton>
      </StyledTableCell>
      <StyledTableCell align="center">
        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(props.student.id)}>
          <DeleteIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default Student;
