// import FriendItem from './FriendsItem'
import style from './friends.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={style.item}>
            <span
              className={style.status}
              style={
                friend.isOnline
                  ? { backgroundColor: 'green' }
                  : { backgroundColor: 'black' }
              }
            >
              {' '}
            </span>

            <img
              className={style.avatar}
              src={friend.avatar}
              alt=""
              width="48"
            />
            <p className={style.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
