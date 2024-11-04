import { UserProvider } from "./Context/userContext";
import Failed from "./pages/Failure/Failed.page.jsx";

import { Login, Success } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/milexia" element={<Success />} />
            <Route path="/invalid" element={<Failed />} />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
};

export default App;
