import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/page-header/PageHeader';
import './StudentsPage.scss';

const StudentsPage = () => {

  return (
    <>
        <Navbar />
        <PageHeader 
            description='Manage all the registered students'
            title='Manage Students'
        /> 
    </>
  );

}

export default StudentsPage;