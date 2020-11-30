import PropTypes from 'prop-types';
import StatsItem from './StatsItem';

import style from './stats.module.css';

export default function StatisticsList({ title = false, stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={title ? style.title : null}>{title}</h2>

      <ul className={style.statList}>
        {stats.map(item => {
          return (
            <li key={item.id}>
              <StatsItem label={item.label} percentage={item.percentage} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};
