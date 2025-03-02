import EnrollmentContent from '../../components/enrollment-content/EnrollmentContent';
import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/page-header/PageHeader';
import './EnrollmnetsPage.scss';

const EnrollmnetsPage = () => {

  return (
    <>
      <Navbar />
      <PageHeader
        description='Manage all the course and student enrollments'
        title='Manage Enrollments'
      />  
      <EnrollmentContent />
    </>
  );

}

export default EnrollmnetsPage;
