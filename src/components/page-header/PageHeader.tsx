import { PageHeaderProps } from '../../types/component.types';
import './PageHeader.scss';

const PageHeader = (props: PageHeaderProps) => {

  return (
    <div className='page-header'>
      <div className="page-header-inner">
        <h1 className="page-header-title">{props.title}</h1>
        <h5 className="page-header-description">{props.description}</h5>
      </div>
    </div>
  );

}

export default PageHeader;
