import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/page-header/PageHeader';
import './CoursesPage.scss';

const CoursesPage = () => {

  return (
    <>
      <Navbar />
      <PageHeader
        description='Manage all the courses and materials'
        title='Manage Courses'
      />   
    </>
  );

}

export default CoursesPage;
