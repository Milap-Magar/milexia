import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Backend/Config/config";
import { useUser } from "../../Context/userContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("email");
      navigate("/");
    } catch (e) {
      console.error("Error signing out: ", e);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="py-2 px-4 bg-red-500 text-white rounded-lg font-bold shadow-md hover:bg-red-600 transition-colors"
    >
      Logout
    </button>
  );
};
