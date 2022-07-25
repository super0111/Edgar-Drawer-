import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dashboard";
import BusinessStatus from "./components/BusinessStatus";
import Promote from "./components/Promote";
import Invitation from "./components/Invitation";
import GoalChange from "./components/GoalChange";
import QA from "./components/QA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Homepage />} />
        <Route exact path="/homepage" element={ <Homepage />} />
        <Route exact path="/login" element={ <Login />} />
        <Route exact path="/dashboard" element={ <Dashboard />} />
        <Route exact path="/businessStatus" element={ <BusinessStatus />} />
        <Route exact path="/promote" element={ <Promote />} />
        <Route exact path="/invitation" element={ <Invitation />} />
        <Route exact path="/goalChange" element={ <GoalChange />} />
        <Route exact path="/qa" element={ <QA />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
