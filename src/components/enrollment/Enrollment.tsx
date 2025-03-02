import { EnrollmentComponentprops } from '../../types/component.types';
import './Enrollment.scss';
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import deleteEnrollment from '../../services/enrollment-service/deleteEnrollment/deleteEnrollment';

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

const Enrollment = (props: EnrollmentComponentprops) => {

  const {token} = useAuthContext();
  const navigate = useNavigate();

  const handleUpdate = (id: number | undefined) => {
    navigate(`/update-enrollment/${id}`);
  }

  const handleDelete = (id: number | undefined) => {
    const ifConfirmed = window.confirm('Do you want to remove the student from this course / Unenroll the student?');
    if(ifConfirmed) {
      deleteEnrollment({
        token: token,
        enrollmentId: id,
        getEnrollments: props.getEnrollments,
        setEnrollments: props.setEnrollments,
        setIsError: props.setIsError,
        setIsSuccess: props.setIsSuccess,
        setIsLoading: props.setIsSuccess
      });
    }
  }

  return (
    <StyledTableRow key={props.enrollment.id}>
      <StyledTableCell align="center">
        {props.enrollment.id}
      </StyledTableCell>
      <StyledTableCell align="center">
        {`${props.enrollment.fname} ${props.enrollment.lname}`}
      </StyledTableCell>
      <StyledTableCell align="center">{props.enrollment.title}</StyledTableCell>
      <StyledTableCell align="center">{props.enrollment.instructor}</StyledTableCell>
      <StyledTableCell align="center">{props.enrollment.enrollment_date?.split('T')[0]}</StyledTableCell>
      <StyledTableCell align="center">
        <IconButton edge="end" aria-label="edit" onClick={() => handleUpdate(props.enrollment.id)}>
          <EditIcon />
        </IconButton>
      </StyledTableCell>
      <StyledTableCell align="center">
        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(props.enrollment.id)}>
          <DeleteIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );

}

export default Enrollment;