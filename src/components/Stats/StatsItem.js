import PropTypes from 'prop-types';
import style from './stats.module.css';

export default function StatisticsItem({ label, percentage }) {
  return (
    <div className={style.statItem}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage} %</span>
    </div>
  );
}

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
