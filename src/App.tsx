import { UserProvider } from "./Context/userContext";
import Failed from "./pages/Failure/Failed.page.js";

import { Login, Success } from "./pages";
import { ThemeProvider } from "./Context/ThemeContext.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard/Dashboard.js";

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/milexia" element={<Success />} />
            <Route path="/milexia/home" element={<Dashboard />} />
            <Route path="/invalid" element={<Failed />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
