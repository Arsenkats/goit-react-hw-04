import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt='Avatar' width='48' />
      <p>{name}</p>
      <p
        className={clsx(
          css.onlineStat,
          isOnline ? css.onlineStat : css.offlineStat
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
