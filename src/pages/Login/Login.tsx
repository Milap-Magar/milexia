import bg from "../../assets/bg.jpg";
import { SiGmail } from "react-icons/si";
import { auth, provider } from "../../Backend/Config/config";
import { signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    const [value, setValue] = useState<String>("");
    signInWithPopup(auth, provider).then((data: any) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });

    useEffect(() => {
      setValue(localStorage.getItem("email"));
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-4xl shadow-lg shadow-red-500 bg-white rounded-lg overflow-hidden ">
        <div className="hidden md:block md:w-1/2">
          <img
            src={bg}
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 space-y-8">
          <h2 className="text-3xl font-semibold text-center text-gray-700 animate-fade-in">
            Welcome Back!
          </h2>
          <p className="text-center text-gray-500">
            Please login to your account.
          </p>

          <button
            onClick={handleGoogleLogin}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg font-bold shadow-md hover:bg-red-600 transition-colors animate-pulse flex items-center justify-center"
          >
            Login with Google
            <SiGmail className="ml-2 text-yellow-500" />
          </button>

          {/* Divider */}
          <div className="flex items-center justify-center space-x-2">
            <hr className="w-1/3 border-gray-300" />
            <p className="text-sm text-gray-400">OR</p>
            <hr className="w-1/3 border-gray-300" />
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg font-bold shadow-md hover:bg-blue-600 transition-colors animate-fade-in"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
