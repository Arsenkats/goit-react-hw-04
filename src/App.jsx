/* eslint-disable no-irregular-whitespace */
import userData from "./userData.json";
import friends from "./friends.json";
import Profile from "./components/Profile/Profile.1";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

const App = () => {
  return (
    <>
           {" "}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />   {" "}
    </>
  );
};

export default App;
