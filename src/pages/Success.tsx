import { Main } from "../components/";
import { useUser } from "../Context/userContext";

const Success = () => {
  const user = useUser();
  return <div>{user ? <Main /> : <p>User is waiting</p>}</div>;
};

export default Success;
