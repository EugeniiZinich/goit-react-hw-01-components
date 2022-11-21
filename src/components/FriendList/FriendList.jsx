import PropTypes from 'prop-types';
import css from "./FriendList.module.css"
import { FriendListItem } from './FriendListItem';


export const FriendList = ({friends}) => {
    return (<ul className={css.friend_list}>
    {friends.map(friend => {
      return (
        <FriendListItem id={friend.id} avatar={friend.avatar} isOnline={friend.isOnline} name={friend.name}  />
    )
   })}
</ul>)
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
