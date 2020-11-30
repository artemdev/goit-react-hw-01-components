import PropTypes from 'prop-types';
import styles from './profile.module.css';
import StatisticsList from '../Stats/StatsList';
import FriendsList from '../Friends/FriendsList';
import TransactionHistory from '../Transactions/TransactionHistory';

import transactions from '../Transactions/data';
import friends from '../Friends/data';
import stats from '../Stats/data';

export default function Profile({
  imgUrl,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={imgUrl} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>

      <StatisticsList stats={stats} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

Profile.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
