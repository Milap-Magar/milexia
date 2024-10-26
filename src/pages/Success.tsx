import { useUser } from "../Context/userContext";

const Success = () => {
  const user = useUser();
  return (
    <div>
      {user ? <p>{user.user}</p> : <p>User is waiting</p>}
      <h1>Welcome {user.user}Logged in </h1>
    </div>
  );
};

export default Success;
