import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/page-header/PageHeader';
import './DashboardPage.scss';

const DashboardPage = () => {

  return (
    <>
      <Navbar />
      <PageHeader
        description='Overview of the Online Learning Platform'
        title='Admin Dashboard'
      /> 
    </>
  );

}

export default DashboardPage;