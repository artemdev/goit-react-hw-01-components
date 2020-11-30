import PropTypes from 'prop-types';

function FriendItem({ avatar, name, isOnline = false, id }) {
  return (
    <div>
      <span
        style={
          isOnline
            ? { backgroundColor: '#aed581' }
            : { backgroundColor: 'black' }
        }
      ></span>

      <img src={avatar} alt="" width="48" />
      <p>{name}</p>
    </div>
  );
}

FriendItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendItem;
