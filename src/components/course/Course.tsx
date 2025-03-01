import { CourseComponentprops } from '../../types/component.types';
import './Course.scss';
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import deleteCourse from '../../services/course-service/deleteCourse/deleteCourse';

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

const Course = (props: CourseComponentprops) => {

  const {token} = useAuthContext();
  const navigate = useNavigate();

  const handleUpdate = (id: number | undefined) => {
    navigate(`/update-course/${id}`);
  }

  const handleDelete = (id: number | undefined) => {
    const ifConfirmed = window.confirm('Are you sure want to delete this course?');
    if(ifConfirmed) {
      deleteCourse({
        courseId: id,
        getCourses: props.getCourses,
        setCourses: props.setCourses,
        setIsError: props.setIsError,
        setIsSuccess: props.setIsSuccess,
        setIsLoading: props.setIsLoading,
        token: token
      });
    }
  }
    
  return (
    <StyledTableRow key={props.course.id}>
      <StyledTableCell align="center">
        {props.course.id}
      </StyledTableCell>
      <StyledTableCell align="center">
        {props.course.title}
      </StyledTableCell>
      <StyledTableCell align="center">{props.course.instructor}</StyledTableCell>
      <StyledTableCell align="center">{props.course.start_date?.split('T')[0]}</StyledTableCell>
      <StyledTableCell align="center">{props.course.end_date?.split('T')[0]}</StyledTableCell>
      <StyledTableCell align="center">
        <IconButton edge="end" aria-label="edit" onClick={() => handleUpdate(props.course.id)}>
          <EditIcon />
        </IconButton>
      </StyledTableCell>
      <StyledTableCell align="center">
        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(props.course.id)}>
          <DeleteIcon />
        </IconButton>
      </StyledTableCell>
    </StyledTableRow>
  );

}

export default Course;
