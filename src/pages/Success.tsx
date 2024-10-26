import { useUser } from "../Context/userContext";

const Success = () => {
  const user = useUser();
  return (
    <div>
      {user ? (
        <h1>Welcome {user.user} </h1>
      ) : (
        <p>User is waiting</p>
      )}
    </div>
  );
};

export default Success;
