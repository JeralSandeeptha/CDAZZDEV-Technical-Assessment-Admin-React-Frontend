import './OverviewCard.scss';
import { OverviewCardProps } from '../../types/component.types';

const OverviewCard = (props: OverviewCardProps) => {

  return (
    <div className='test overview-card'>
        <div className="test overview-card-left">
            <img className="test overview-card-image" src={props.image} alt="overview card image" />
        </div>
        <div className="test overview-card-right">
            <h1 className="test overview-card-count">{props.count}</h1>
            <h2 className="test overview-card-title">{props.title}</h2>
            <p className="test overview-card-description">{props.description}</p>
        </div>
    </div>
  );

}

export default OverviewCard;