import PropTypes from 'prop-types';
import StatsItem from './StatsItem';

import style from './stats.module.css';

export default function StatisticsList({ stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.statList}>
        {stats.map(item => {
          return (
            <li>
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
